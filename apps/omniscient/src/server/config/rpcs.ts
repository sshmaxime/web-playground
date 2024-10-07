import type { SupportedChain } from "@schemas/chains";
import { ServerEnv } from "src/env/server";

/**
 * @dev
 */
const ALCHEMY_API_KEY = ServerEnv.ALCHEMY_API_KEY;

/**
 * @dev
 */
const RPCS = {
	OmniOmega: "https://omega.omni.network",
	Holesky: "https://1rpc.io/holesky",
	OptimismSepolia: `https://opt-sepolia${ALCHEMY_API_KEY}`,
	ArbitrumSepolia: `https://arb-sepolia${ALCHEMY_API_KEY}`,
	BaseSepolia: `https://base-sepolia${ALCHEMY_API_KEY}`,
} as const satisfies { [key in SupportedChain]: string };

export { RPCS };
