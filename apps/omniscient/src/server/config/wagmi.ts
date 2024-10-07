import { http, createConfig } from "@wagmi/core";

import { ChainConfigs } from "@schemas/chains";
import { RPCS } from "@server/config/rpcs";

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

export { config };
