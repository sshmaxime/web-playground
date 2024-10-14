import { ServerEnv } from "@configs/env/server";
import type { SupportedChain } from "@configs/schemas/chains";

/**
 * @dev
 */
const ALCHEMY_API_KEY = ServerEnv.ALCHEMY_API_KEY;

/**
 * @dev
 */
const RPCS = {
	Anvil: "http://127.0.0.1:8545",
	//
	OptimismSepolia: `https://opt-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
} as const satisfies { [key in SupportedChain]: string };

export { RPCS };
