"use server";

import { config } from "@server/config/wagmi";

import { readStoreDropData } from "@web-playground/contracts-premier/wagmi.ts";

import { fetchDropMetadata } from "@server/actions/ipfs";

/**
 * @dev
 */
const drop = async (dropId: bigint) => {
	const dropData = await readStoreDropData(config, { args: [dropId] });
	const dropMetadata = await fetchDropMetadata(dropData.dropURI);

	return {
		id: dropData.id,
		symbol: dropData.symbol,
		price: dropData.price.toString(),
		maxSupply: dropData.maxSupply,
		currentSupply: dropData.currentSupply,
		metadata: dropMetadata,
	};
};

export { drop };
