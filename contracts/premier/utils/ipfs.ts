import { promises as fs } from "node:fs";
import path from "node:path";

import type { DropMetadata } from "../src/types";

import { create } from "ipfs-http-client";

const DROP_DIR = path.join(__dirname, "..", "resources", "drop");
const DROP_VERSIONS_DIR_NAME = "versions";
const DROP_MODEL_FILE = "model.glb";

export const IPFS_PREFIX = "ipfs://";

const node = create({ url: "/ip4/127.0.0.1/tcp/5001" });

const generateDropMetadata = async (dropId: number): Promise<DropMetadata> => {
	const dropDir = path.join(DROP_DIR, dropId.toString());
	const dropModelFile = path.join(dropDir, DROP_MODEL_FILE);
	const dropVersionsDir = path.join(dropDir, DROP_VERSIONS_DIR_NAME);

	// Upload model
	const modelData = await fs.readFile(dropModelFile);
	const modelFile = await node.add({ content: modelData });
	const modelAddress = IPFS_PREFIX + modelFile.cid.toV1().toString();

	// Upload each versions
	const versions: DropMetadata["versions"] = [];
	const files = await fs.readdir(dropVersionsDir);
	for (let index = 0; index < files.length / 2; index++) {
		const infoFile = path.join(dropVersionsDir, `${index}.info.json`);
		const textureFileName = path.join(dropVersionsDir, `${index}.texture.png`);

		const textureData = await fs.readFile(textureFileName);
		const textureFile = await node.add({ content: textureData });
		const textureAddress = IPFS_PREFIX + textureFile.cid.toV1().toString();

		const info = JSON.parse((await fs.readFile(infoFile)).toString());
		info.texture = textureAddress;
		versions.push(info);
	}

	return { id: dropId, model: modelAddress, versions };
};

export const publishDropMetadataToIPFS = async (dropId: number) => {
	const result = await generateDropMetadata(dropId);

	const file = await node.add({ content: JSON.stringify(result) });
	const fileAddress = IPFS_PREFIX + file.cid.toString();

	return fileAddress;
};
