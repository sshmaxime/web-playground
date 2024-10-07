import type { SupportedChain } from "@schemas/chains";

/**
 * @dev
 */
const ALCHEMY_API_URL = ".g.alchemy.com/v2/s892w_3Kxzw6WIPSPVYVT-rufLLDo7pp";

/**
 * @dev
 */
const RPCS = {
	OmniOmega: "https://omega.omni.network",
	Holesky: "https://1rpc.io/holesky",
	OptimismSepolia: `https://opt-sepolia${ALCHEMY_API_URL}`,
	ArbitrumSepolia: `https://arb-sepolia${ALCHEMY_API_URL}`,
	BaseSepolia: `https://base-sepolia${ALCHEMY_API_URL}`,
} as const satisfies { [key in SupportedChain]: string };

export { RPCS };
