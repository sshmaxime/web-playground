"use server";

import { readContract } from "@wagmi/core";

import { STORE_ADDRESS } from "@configs/constants/addresses";
import { config } from "@server/config/wagmi";
import { StoreABI } from "@web-playground/contracts-premier/StoreABI.ts";

/**
 * @dev
 */
const getDropSupply = async () => {
	const dropSupply = await readContract(config, {
		abi: StoreABI,
		address: STORE_ADDRESS,
		functionName: "dropSupply",
	});

	return dropSupply;
};

export { getDropSupply };
