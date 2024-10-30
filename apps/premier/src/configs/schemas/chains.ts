import { ServerEnv } from "@configs/env/server";
import { RPCS } from "@server/config/rpcs";
import { Functions } from "@web-playground/utils";
import { Network } from "alchemy-sdk";
import { http, type Chain, type HttpTransport } from "viem";
import { anvil, mainnet, optimismSepolia } from "viem/chains";
import { z } from "zod";

/**
 * @dev List of all the supported chains.
 */
const zAppChainName = z.enum(["Anvil", "OptimismSepolia", "Ethereum"]);
type AppChainName = z.infer<typeof zAppChainName>;
type AppChainId = {
	[K in keyof typeof ChainConfigs]: (typeof ChainConfigs)[K]["viem"]["id"];
}[keyof typeof ChainConfigs];

/**
 * @dev List of all the supported chains configurations.
 */
type ChainConfig = { name: string; alchemy: Network | undefined; viem: Chain };
const ChainConfigs = {
	Ethereum: {
		name: zAppChainName.Enum.Ethereum,
		alchemy: Network.ETH_MAINNET,
		viem: mainnet,
	},
	OptimismSepolia: {
		name: zAppChainName.Enum.OptimismSepolia,
		alchemy: Network.OPT_SEPOLIA,
		viem: optimismSepolia,
	},
	Anvil: {
		name: zAppChainName.Enum.Anvil,
		alchemy: undefined,
		viem: anvil,
	},
} as const satisfies { [key in AppChainName]: ChainConfig };
type ChainConfigs = (typeof ChainConfigs)[keyof typeof ChainConfigs];

console.log(ServerEnv);

/**
 * @dev List of all the supported chains configurations as non empty array.
 */
const ChainConfigsArray = Functions.nonEmptyArray(
	Object.values(ChainConfigs).map((config) => config.viem),
);

/**
 * @dev
 */
const ChainTransport = Object.fromEntries(
	Object.values(ChainConfigs).map((config) => [
		config.viem.id as AppChainId,
		http(RPCS[config.name as keyof typeof RPCS]),
	]),
) as { [key in AppChainId]: HttpTransport };

/**
 * @dev
 */
const chainIdAsChainName = (chainId: number) =>
	Object.values(ChainConfigs).find((item) => item.viem.id === chainId)?.name as AppChainName;

/**
 * @dev
 */
const DEFAULT_CHAIN_ID = (() => {
	switch (ServerEnv.NODE_ENV) {
		case "production":
			return ChainConfigs.Ethereum.viem.id;
		case "staging":
			return ChainConfigs.OptimismSepolia.viem.id;

		default:
			return ChainConfigs.Anvil.viem.id;
	}
})();

// biome-ignore lint/style/useExportType: <explanation>
export {
	ChainConfigs,
	ChainConfigsArray,
	type AppChainName,
	zAppChainName,
	type AppChainId,
	ChainTransport,
	chainIdAsChainName,
	DEFAULT_CHAIN_ID,
};
