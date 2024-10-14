import { z } from "zod";

import { Functions } from "@web-playground/utils";
import type { Chain } from "viem";
import { anvil } from "viem/chains";

/**
 * @dev List of all the supported chains.
 */
const zSupportedChain = z.enum(["Anvil"]);
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
} as const satisfies { [key in SupportedChain]: ChainConfig };
type ChainConfigs = (typeof ChainConfigs)[keyof typeof ChainConfigs];

/**
 * @dev List of all the supported chains configurations as non empty array.
 */
const ChainConfigsArray = Functions.toNonEmptyArray(Object.values(ChainConfigs));

// biome-ignore lint/style/useExportType: <explanation>
export { ChainConfigs, ChainConfigsArray, type SupportedChain, zSupportedChain };
