import { mintclub } from "mint.club-v2-sdk";

// Available networks are ethereum base blast optimism arbitrum 
// polygon avalanche bnbchain sepolia blastsepolia and avalanchefuji.

const totalSupply = await mintclub
                    .network('base')
                    .token('CHICKEN')
                    .getTotalSupply()