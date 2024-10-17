/**
 * @dev Hardhat Environment.
 */
type HardhatEnv = {
	DEV_DEPLOYER: string;
	DEV_USER: string;
	SALT: string;
};

declare global {
	namespace NodeJS {
		interface ProcessEnv extends HardhatEnv {}
	}
}

export {};
