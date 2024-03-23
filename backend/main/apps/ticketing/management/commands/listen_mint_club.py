from django.core.management.base import BaseCommand
from web3 import Web3
import requests
import json
import time
import os
from main.utils.env_loader import default_env
from main.apps.ticketing.models import TicketBC

class Command(BaseCommand):
    help = 'Continuously listen for MultiTokenCreated events and update or create TicketBC entries accordingly.'

    def handle(self, *args, **options):
        web3 = Web3(Web3.HTTPProvider(default_env.RPC_URL))

        mintclub_abi = self.load_abi('MintClub.json')
        mintclub_contract = web3.eth.contract(address=default_env.MINT_CLUB_CONTRACT_ADDRESS, abi=mintclub_abi)

        event_filter = mintclub_contract.events.MultiTokenCreated.create_filter(fromBlock='latest')
        print("Listening for MultiTokenCreated events...")

        while True:
            events = event_filter.get_new_entries()
            if events:
                for event in events:
                    tx_hash = event['transactionHash'].hex()
                    tx_receipt = web3.eth.get_transaction(tx_hash)
                    creator_address = tx_receipt['from']
                    uri = event['args']['uri']
                    external_url, image = self.fetch_ipfs_content(uri)

                    TicketBC.objects.update_or_create(
                        contract_address=event['args']['token'],
                        defaults={
                            'contract_owner_address': creator_address,
                            'base_uri': uri,
                            'ticket_name': event['args']['name'],
                            'ticket_symbol': event['args']['symbol'],
                            'mint_club_site': external_url,
                            'image': image
                        }
                    )
                    print(f"Updated or created TicketBC for {event['args']['name']}")
            time.sleep(10)

    def fetch_ipfs_content(self, uri):
        external_url, image = '', ''
        if uri.startswith("ipfs://"):
            ipfs_hash = uri.split("ipfs://")[1]
            ipfs_url = f"https://ipfs.io/ipfs/{ipfs_hash}"
            try:
                response = requests.get(ipfs_url)
                ipfs_content = response.json()
                external_url = ipfs_content.get('external_url', '')
                image = ipfs_content.get('image', '').replace('ipfs://', 'https://ipfs.io/ipfs/')
            except Exception as e:
                print(f"Failed to fetch or parse IPFS content for URI {uri}: {e}")
        return external_url, image

    def load_abi(self, file_name):
        path = os.path.join(os.path.dirname(__file__), '../../abi', file_name)
        with open(path, 'r') as file:
            return json.load(file)
