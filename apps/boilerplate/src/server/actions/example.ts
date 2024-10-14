"use server";

import { getBalance as getBalancePrimitive } from "@wagmi/core";

import { EXAMPLE_ADDRESS } from "@configs/constants/addresses";
import { config } from "@server/config/wagmi";

/**
 * @dev
 */
const getBalance = async () => {
	const balance = await getBalancePrimitive(config, { address: EXAMPLE_ADDRESS });
	return balance.value;
};

export { getBalance };
