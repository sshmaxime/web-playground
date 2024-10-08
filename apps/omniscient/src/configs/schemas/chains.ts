import { z } from "zod";

import { arbitrumSepolia, baseSepolia, holesky, optimismSepolia } from "@wagmi/core/chains";
import { type Chain, defineChain } from "viem";

/**
 * @dev List of all the supported chains in the Omni network.
 */
const zSupportedChain = z.enum([
	"OmniOmega",
	"Holesky",
	"OptimismSepolia",
	"ArbitrumSepolia",
	"BaseSepolia",
]);
type SupportedChain = z.infer<typeof zSupportedChain>;

/**
 * @dev List of all the supported chains configurations.
 */
type ChainConfig = Chain & { omniId: string };
const ChainConfigs = {
	OmniOmega: {
		omniId: zSupportedChain.Enum.OmniOmega,
		...defineChain({
			id: 164,
			name: "Omni Omega",
			nativeCurrency: { name: "Omni Omega", symbol: "OMNI", decimals: 18 },
			rpcUrls: { default: { http: ["https://omega.omni.network"] } },
			blockExplorers: { default: { name: "Omniscan", url: "https://omega.omniscan.network/" } },
		}),
	},
	Holesky: {
		omniId: zSupportedChain.Enum.Holesky,
		...holesky,
	},
	OptimismSepolia: {
		omniId: zSupportedChain.Enum.OptimismSepolia,
		...optimismSepolia,
	},
	ArbitrumSepolia: {
		omniId: zSupportedChain.Enum.ArbitrumSepolia,
		...arbitrumSepolia,
	},
	BaseSepolia: {
		omniId: zSupportedChain.Enum.BaseSepolia,
		...baseSepolia,
	},
} as const satisfies { [key in SupportedChain]: ChainConfig };
type ChainConfigs = (typeof ChainConfigs)[keyof typeof ChainConfigs];

// biome-ignore lint/style/useExportType: <explanation>
export { ChainConfigs, type SupportedChain, zSupportedChain };
