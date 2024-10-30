import { promises as fs } from "node:fs";
import path from "node:path";

import { minify } from "html-minifier-terser";
import { create } from "ipfs-http-client";
import type { Config, DropMetadata } from "../src/types";

const DROP_DIR = path.join(__dirname, "..", "resources", "drop");

export const IPFS_PREFIX = "ipfs://";

const node = create({ url: "/ip4/127.0.0.1/tcp/5001" });

const publishDropMetadataToIpfs = async (dropConfig: Config) => {
	const dropDir = path.join(DROP_DIR, dropConfig.id.toString());

	/**
	 * @dev Upload model on IPFS.
	 */
	const modelFilePath = path.join(dropDir, dropConfig.metadata.model.filePath);
	const modelFile = await fs.readFile(modelFilePath);
	const modelIpfsResult = await node.add({ content: modelFile });
	const modelIpfsAddress = IPFS_PREFIX + modelIpfsResult.cid.toV1().toString();

	/**
	 * @dev Upload each versions on IPFS.
	 */
	const versions: DropMetadata["versions"] = [];
	for (const [index, version] of dropConfig.metadata.versions.entries()) {
		const { name, color, filePath } = version;

		const textureFilePath = path.join(dropDir, filePath);
		const textureFile = await fs.readFile(textureFilePath);
		const textureIpfsResult = await node.add({ content: textureFile });
		const textureIpfsAddress = IPFS_PREFIX + textureIpfsResult.cid.toV1().toString();

		const versionItem: DropMetadata["versions"][number] = {
			id: index,
			name: name,
			color: color,
			texture: textureIpfsAddress,
		};

		versions.push(versionItem);
	}

	const informations: DropMetadata["informations"] = [];
	for (const information of dropConfig.metadata.informations) {
		const { title, filePath } = information;

		const informationFilePath = path.join(dropDir, filePath);
		const informationFile = await fs.readFile(informationFilePath, "utf-8");
		const informationMinified = await minify(informationFile, { collapseWhitespace: true });

		const informationitem: DropMetadata["informations"][number] = {
			title: title,
			html: informationMinified,
		};

		informations.push(informationitem);
	}

	const metadata: DropMetadata = {
		id: dropConfig.id,
		model: modelIpfsAddress,
		versions: versions,
		informations: informations,
	};

	const metadataIpfsResult = await node.add({ content: JSON.stringify(metadata) });
	const metadataIpfsAddress = IPFS_PREFIX + metadataIpfsResult.cid.toV1().toString();

	return { metadataIpfsAddress };
};

export { publishDropMetadataToIpfs };
