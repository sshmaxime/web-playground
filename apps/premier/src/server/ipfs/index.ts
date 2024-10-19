import { ipfsUrl } from "@server/config/ipfs";

/**
 * @dev
 */
const fetchDropMetadata = async (rawDropURI: string) => {
	const metadata = await (await fetch(new URL(ipfsUrl(rawDropURI)))).json();

	metadata.model = ipfsUrl(metadata.model);
	for (const version of metadata.versions) {
		version.texture = ipfsUrl(version.texture);
	}

	return metadata;
};

export { fetchDropMetadata };
