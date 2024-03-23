from django.core.management.base import BaseCommand
from web3 import Web3
from main.utils.env_loader import default_env
from main.apps.ticketing.models import TicketSBT
import time
import json
import os

class Command(BaseCommand):
    help = 'Listen to blockchain events and update the TicketSBT model accordingly.'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting to listen for blockchain events...'))

        web3 = Web3(Web3.HTTPProvider(default_env.RPC_URL))

        factory_abi = self.load_abi('FactorySBT.json')
        erc1155_abi = self.load_abi('SoulBoundToken.json')
        factory_contract = web3.eth.contract(address=default_env.FACTORY_CONTRACT_ADDRESS, abi=factory_abi)

        factory_event_filter = factory_contract.events.SBTCreated.create_filter(fromBlock='latest')

        while True:
            factory_events = factory_event_filter.get_new_entries()
            for factory_event in factory_events:
                erc1155_contract_address = factory_event['args']['_token_contract']
                erc1155_contract = web3.eth.contract(address=erc1155_contract_address, abi=erc1155_abi)
                erc1155_event_filter = erc1155_contract.events.TicketsUpdated.create_filter(fromBlock='latest')
                erc1155_events = erc1155_event_filter.get_new_entries()
                for erc1155_event in erc1155_events:
                    self.combine_event_data(factory_event, erc1155_event)

            time.sleep(10)

    def load_abi(self, file_name):
        path = os.path.join(os.path.dirname(__file__), '../../abi', file_name)
        with open(path, 'r') as file:
            return json.load(file)['abi']

    def combine_event_data(self, factory_event, erc1155_event):
        contract_address = factory_event['args']['_token_contract']
        owner_address = factory_event['args']['_owner']
        contract_name = factory_event['args']['_contractName']
        uri = factory_event['args']['_uri']
        ticket_ids = erc1155_event['args']['_ticket_ids']
        names = erc1155_event['args']['_names']
        fees = erc1155_event['args']['_fees']
        supplies = erc1155_event['args']['_supplies']

        for i in range(len(ticket_ids)):
            ticket, created = TicketSBT.objects.update_or_create(
                contract_address=contract_address,
                ticket_id=ticket_ids[i],
                defaults={
                    'contract_name': contract_name,
                    'contract_owner_address': owner_address,
                    'base_uri': uri,
                    'ticket_name': names[i],
                    'ticket_fee': fees[i],
                    'ticket_max_supply': supplies[i],
                }
            )
            if created:
                print(f'''Created new TicketSBT: {ticket}''')
            else:
                print(f'''Updated existing TicketSBT with new data: {ticket}''')
