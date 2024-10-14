import { ServerEnv } from "@configs/env/server";
import type { SupportedChain } from "@configs/schemas/chains";

/**
 * @dev
 */

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
const ALCHEMY_API_KEY = ServerEnv.ALCHEMY_API_KEY;

/**
 * @dev
 */
const RPCS = {
	Anvil: "http://127.0.0.1:8545",
} as const satisfies { [key in SupportedChain]: string };

export { RPCS };
