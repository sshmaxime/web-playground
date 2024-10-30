"use server";

import { ipfsUrl } from "@server/config/ipfs";

import type { DropMetadata } from "@web-playground/contracts-premier/types.ts";

/**
 * @dev
 */
const fetchDropMetadata = async (dropURI: string): Promise<DropMetadata> => {
	const metadata = (await (await fetch(new URL(ipfsUrl(dropURI)))).json()) as DropMetadata;

	metadata.model = ipfsUrl(metadata.model);
	for (const version of metadata.versions) version.texture = ipfsUrl(version.texture);

	return metadata;
};

export { fetchDropMetadata };
