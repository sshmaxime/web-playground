import { z } from "zod";

import { Functions } from "@web-playground/utils";
import type { Chain } from "viem";
import { anvil, optimismSepolia } from "viem/chains";

/**
 * @dev List of all the supported chains.
 */
const zSupportedChain = z.enum(["Anvil", "OptimismSepolia"]);
type SupportedChain = z.infer<typeof zSupportedChain>;

/**
 * @dev List of all the supported chains configurations.
 */
type ChainConfig = Chain & { chainInternalId: string };
const ChainConfigs = {
	Anvil: {
		chainInternalId: zSupportedChain.Enum.Anvil,
		...anvil,
	},
	OptimismSepolia: {
		chainInternalId: zSupportedChain.Enum.OptimismSepolia,
		...optimismSepolia,
	},
} as const satisfies { [key in SupportedChain]: ChainConfig };
type ChainConfigs = (typeof ChainConfigs)[keyof typeof ChainConfigs];

/**
 * @dev List of all the supported chains configurations as non empty array.
 */
const ChainConfigsArray = Functions.nonEmptyArray(Object.values(ChainConfigs));

// biome-ignore lint/style/useExportType: <explanation>
export { ChainConfigs, ChainConfigsArray, type SupportedChain, zSupportedChain };
