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
	OmniOmega: "https://omega.omni.network",
	Holesky: "https://1rpc.io/holesky",
	OptimismSepolia: `https://opt-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
	ArbitrumSepolia: `https://arb-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
	BaseSepolia: `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
} as const satisfies { [key in SupportedChain]: string };

export { RPCS };
