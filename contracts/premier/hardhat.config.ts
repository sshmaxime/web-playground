import "dotenv/config";

import "@nomicfoundation/hardhat-toolbox-viem";

import type { HardhatUserConfig } from "hardhat/config";

/**
 * @dev
 */
const { DEV_DEPLOYER, DEV_USER, SALT } = process.env;

/**
 * @dev
 */
const config: HardhatUserConfig = {
	solidity: {
		compilers: [{ version: "0.8.28", settings: { optimizer: { enabled: true, runs: 200 } } }],
	},

	networks: {
		hardhat: {
			accounts: [
				{
					privateKey: DEV_DEPLOYER,
					balance: "10000000000000000000000000000000000000000000000",
				},
				{
					privateKey: DEV_USER,
					balance: "10000000000000000000000000000000000000000000000",
				},
			],
		},
	},

	ignition: {
		strategyConfig: { create2: { salt: SALT } },
	},
};

export default config;
