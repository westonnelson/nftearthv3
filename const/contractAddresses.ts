/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Arbitrum, Ethereum, Optimism, Polygon, ZksyncEra } from "@thirdweb-dev/chains";
export const NETWORK = Arbitrum;


// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x686dd6a3a6B0F2eB93d428B1887dcbDd384f5a1B";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xFfd9bAddF3f6e427EfAa1A4AEC99131078C1d683";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://arbiscan.io";
