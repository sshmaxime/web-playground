"use server";

import { config } from "@server/config/wagmi";

import type { AppChainId } from "@configs/schemas/chains";
import type { Drop } from "@configs/schemas/drop";
import { fetchDropMetadata } from "@server/actions/ipfs";
import { readStoreDropData } from "@web-playground/contracts-premier/wagmi.ts";

/**
 * @dev
 */
const drop = async (dropId: bigint, chainId: AppChainId): Promise<Drop> => {
	console.log(dropId, chainId);
	const dropData = await readStoreDropData(config, { args: [dropId], chainId });
	const dropMetadata = await fetchDropMetadata(dropData.dropURI);

	console.log(dropData);

	return {
		id: dropData.id,
		symbol: dropData.symbol,
		name: dropData.name,
		currentSupply: dropData.currentSupply,
		maxSupply: dropData.maxSupply,
		price: dropData.price,
		versions: dropData.versions,
		contractURI: dropData.contractURI,
		dropURI: dropData.dropURI,
		baseURI: dropData.baseURI,
		//
		metadata: dropMetadata,
	};
};

export { drop };
