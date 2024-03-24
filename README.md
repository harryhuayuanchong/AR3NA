# AR3NA
AR3NA is a Web3-based Ticket Sales and Distribution System that leverages the Mint Club Protocol to generate Bonding Curve NFTs for tickets. Additionally, it provides a feature that allows event organizers to create Soulbound Tokens (SBTs) to restrict the transferability of these tickets, ensuring they cannot be resold. Furthermore, the system enables the setting up of a whitelist to determine who can claim these tickets.

![Flow 1](README_image/flow1.png)
![Flow 2](README_image/flow2.png)

## Why Use Bonding Curve?
- **Dynamic Pricing Mechanism:** The use of Bonding Curve NFTs allows for dynamic pricing, where ticket prices automatically rise with increasing demand and fall as demand decreases. This mechanism helps event organizers to maximize their revenue by ensuring that ticket prices adjust in real time to the market demand.

- **Market Mechanism Reflection:** This system more accurately reflects the true state of supply and demand, leading to more reasonable ticket prices. It prevents the exclusion of genuine fans due to prohibitively high prices and avoids underpricing that can result in lost revenue for organizers.

- **Increased Scalper Risk:** With prices adjusting dynamically, scalpers must buy tickets and hope for further demand increase—and consequently, a price rise—to make a profit. This introduces a higher level of risk for scalpers, potentially reducing scalping activities and making the ticket market more fair for actual fans.

## Soulbound Token
Soulbound Token (Sepolia): [Contract Address](https://sepolia.etherscan.io/address/0x8dce343A86Aa950d539eeE0e166AFfd0Ef515C0c)
- **Non-Transferability:** Once a ticket is minted as an SBT, it becomes tied to the buyer's digital identity, making it impossible to transfer or sell to another party. This ensures that tickets reach their intended audience without the risk of scalping.

- **Whitelist Control:** Event organizers have the capability to create and manage a whitelist, specifying who is eligible to claim tickets. This feature not only restricts access to genuine participants but also allows for targeted distribution strategies, such as prioritizing long-time fans or specific community members.
