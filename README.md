# AR3NA
![cover](https://github.com/harryhuayuanchong/AR3NA/assets/80409863/eea80e3c-ba19-4e33-9fd2-95bf475aa756)

AR3NA is a web3-based event platform that enables users to host and manage events smoothly. By integrating the Mint Club Protocol, our platform enables the use of Bonding Curve ERC1155 Tokens, which are designed to serve as event tickets. This integration offers a dynamic pricing mechanism that responds to real-time market demand. Additionally, AR3NA supports the use of ERC1155-based Soulbound Tokens (SBTs), specifically designed to restrict ticket transferability and prevent resale, ensuring tickets reach their intended audience and fostering a more equitable ticketing experience. The platform also includes a whitelist feature, allowing event organizers to precisely control who can claim tickets, thus enhancing the customization and management of events.

![flow1](https://github.com/harryhuayuanchong/AR3NA/assets/80409863/66ad868c-40d1-4a5e-bfa1-cf8a43cffd81)
![flow2](https://github.com/harryhuayuanchong/AR3NA/assets/80409863/5330ad08-cb74-43c2-b56c-0db59730a73c)

## Why Use Bonding Curve?
- **Dynamic Pricing Mechanism:** The use of Bonding Curve NFTs allows for dynamic pricing, where ticket prices automatically rise with increasing demand and fall as demand decreases. This mechanism helps event organizers to maximize their revenue by ensuring that ticket prices adjust in real time to the market demand.


- **Impact of Information Transparency:** The Bonding Curve model is typically associated with higher levels of market transparency, meaning that all participants can see how ticket prices change in response to demand. This transparency reduces the asymmetry of information, making it difficult for scalpers to exploit buyers lacking market information. Buyers are better informed about how ticket prices evolve over time and may opt to purchase at lower prices directly, rather than buying at inflated prices from scalpers.


- **Increased Scalper's Risk:** The Bonding Curve's dynamic pricing mechanism elevates the risk for scalpers by requiring them not only to buy tickets early, hoping for a rise in demand and prices, but also to precisely predict when demand and prices will peak. This dual challenge significantly increases their risk. A misjudgment in predicting demand peaks can lead to purchasing at too high a price, reducing the margin for profitable resale. This heightened unpredictability and risk could deter scalping.


## Soulbound Token
While the dynamic pricing mechanism of the Bonding Curve offers several advantages, it can also lead to consumer confusion or dissatisfaction due to constant price fluctuations, especially if buyers feel they have paid too much or discover prices have dropped later. Additionally, rapid price increases for high-demand tickets may deter scalpers but also exclude genuine fans with limited budgets. Therefore, we offer event organizers the option to use Bonding Curve, Soulbound Tokens, or a combination of both for ticket issuance.

- **Non-Transferability:** Once a Soulbound Token (SBT) ticket is claimed, it becomes tied to the buyer's digital identity, making it impossible to transfer or sell to another party. This ensures that tickets reach their intended audience, reducing the risk of scalping.

- **Whitelist Control:** Event organizers have the capability to create and manage a whitelist, specifying who is eligible to claim tickets. This feature not only restricts access to genuine participants but also allows for targeted distribution strategies, such as prioritizing long-time fans or specific community members.

Soulbound Token (Sepolia): [0x417E845982933d37F1b473b5A03F660f9e32466b](https://sepolia.etherscan.io/address/0x417e845982933d37f1b473b5a03f660f9e32466b)

# Team Introduction
![team](https://github.com/harryhuayuanchong/AR3NA/assets/80409863/59377ccb-c3fd-4709-9db2-92a59859a82c)

# Setup
## Smart Contract
### Setup environmental variables
```bash
cd contract
```

```bash
cp .env.sample .env
```

### Deploy FactorySBT & Use FactorySBT to Deploy SBT
```bash
forge build
```

```bash
forge script script/FactorySBT.s.sol --broadcast --fork-url $RPC_URL --private-key $PRIVATE_KEY
```

```bash
forge script script/DeploySBT.s.sol --broadcast --fork-url $RPC_URL --private-key $PRIVATE_KEY
```

## Backend
### Setup environmental variables
```bash
cd backend
```

```bash
cp .env.sample .env
```

### Using pipenv
```bash
mkdir .venv
pipenv --python 3.10
pipenv shell
```

### Install the requirements
```bash
pip install -r requirements/base.txt
```

### Create database tables 
```bash
python manage.py migrate
```

### Run backend server
```bash
python manage.py runserver
```

## Frontend
### Setup environmental variables
```bash
cd frontend
```

```bash
cp .env.sample .env
```

### Install the package
```bash
yarn
```

### Run frontend
```bash
yarn start
```
