import { ServerEnv } from "@configs/env/server";
import type { AppChainName } from "@configs/schemas/chains";

/**
 * @dev
 */
const ALCHEMY_API_KEY = ServerEnv.ALCHEMY_API_KEY;

/**
 * @dev
 */
const RPCS = {
	OptimismSepolia: `https://opt-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
	Ethereum: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
	//
	Anvil: "http://127.0.0.1:8545",
} as const satisfies { [key in AppChainName]: string };

export { RPCS };
