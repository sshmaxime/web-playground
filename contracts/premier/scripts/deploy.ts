import hre from "hardhat";

import DropModule from "../ignition/modules/Drop";
import StoreModule from "../ignition/modules/Store";
import { loadConfig } from "../utils/config";
import { publishDropMetadataToIpfs } from "../utils/ipfs";

const storeModuleParameters: Parameters<typeof hre.ignition.deploy>[1] = {
	strategy: "create2",
};

const DROP_ID = 0;

async function main() {
	const dropConfig = await loadConfig(DROP_ID);
	const { metadataIpfsAddress } = await publishDropMetadataToIpfs(dropConfig);

	const { store } = await hre.ignition.deploy(StoreModule, storeModuleParameters);

	await hre.ignition.deploy(DropModule, {
		parameters: {
			Drop: {
				dropId: BigInt(dropConfig.id),
				dropName: dropConfig.name,
				maxSupply: BigInt(dropConfig.maxSupply),
				mintPrice: BigInt(dropConfig.price),
				versions: dropConfig.versions,
				//
				dropURI: metadataIpfsAddress,
			},
		},
	});

	console.log("Added file:", metadataIpfsAddress);
	console.log(`Store deployed to: ${store.address}`);
}

main().catch(console.error);
