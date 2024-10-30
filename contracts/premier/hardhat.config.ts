import "dotenv/config";

import "@nomicfoundation/hardhat-toolbox-viem";

import type { HardhatUserConfig } from "hardhat/config";

/**
 * @dev
 */
const {
	DEV_DEPLOYER = "0x682bd1a2ff7123bd84635da229a63953992203146035b4c0a28fc819f4c5d388", // 0x32e2117ACff236C157D29891cF9E97Af6bA642b9
	DEV_USER = "0x7734e22cd973453592b0b198de35de13f436abc152e6fc51de705453cddccd9f", // 0xC6f2410db1FBCD548b8aA303458583fC3F94C0a7
	SALT = "0x7465737400000000000000000000000000000000000000000000000000000000", // test
} = process.env;

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
