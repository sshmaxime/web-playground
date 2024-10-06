import { ChainConfigs, type SupportedChain } from "@schemas/chains";
import { http, createConfig } from "@wagmi/core";

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

/**
 * @dev
 */
const config = createConfig({
	chains: [
		ChainConfigs.OmniOmega,
		ChainConfigs.Holesky,
		ChainConfigs.OptimismSepolia,
		ChainConfigs.ArbitrumSepolia,
		ChainConfigs.BaseSepolia,
	],
	transports: {
		[ChainConfigs.OmniOmega.id]: http(RPCS.OmniOmega),
		[ChainConfigs.Holesky.id]: http(RPCS.Holesky),
		[ChainConfigs.OptimismSepolia.id]: http(RPCS.OptimismSepolia),
		[ChainConfigs.ArbitrumSepolia.id]: http(RPCS.ArbitrumSepolia),
		[ChainConfigs.BaseSepolia.id]: http(RPCS.BaseSepolia),
	},
});

export { config, RPCS };
