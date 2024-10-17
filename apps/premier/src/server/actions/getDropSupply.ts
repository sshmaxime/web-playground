"use server";

import { config } from "@server/config/wagmi";
import { readStoreDropSupply } from "@web-playground/contracts-premier/wagmi.ts";

/**
 * @dev
 */
const getDropSupply = async () => {
	const dropSupply = await readStoreDropSupply(config, {});
	return dropSupply;
};

export { getDropSupply };
