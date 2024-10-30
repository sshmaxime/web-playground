"use server";

import { alchemySdk } from "@server/config/alchemy";
import type { Network, OwnedNft } from "alchemy-sdk";

/**
 * @dev
 */
const fetchAccountNfts = async (address: string, network: Network) => {
	const alchemy = alchemySdk(network);

	const nfts = (await alchemy.nft.getNftsForOwner(address)).ownedNfts;

	const nftsByCollection = nfts.reduce<{ [collectionName: string]: OwnedNft[] }>((acc, nft) => {
		if (!nft.collection) return acc;

		if (!acc[nft.collection.name]) acc[nft.collection.name] = [];

		acc[nft.collection.name].push(nft);
		return acc;
	}, {});

	return nftsByCollection;
};

export { fetchAccountNfts };
