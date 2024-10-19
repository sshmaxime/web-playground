import hre from "hardhat";

import DropModule from "../ignition/modules/Drop";
import StoreModule from "../ignition/modules/Store";

import { parseEther } from "viem";
import { publishDropMetadataToIPFS } from "../utils/ipfs";

const storeModuleParameters: Parameters<typeof hre.ignition.deploy>[1] = {
	strategy: "create2",
};

const DROP_ID = 0;

async function main() {
	const { store } = await hre.ignition.deploy(StoreModule, storeModuleParameters);

	const dropURI = await publishDropMetadataToIPFS(DROP_ID);

	await hre.ignition.deploy(DropModule, {
		parameters: {
			Drop: {
				dropId: DROP_ID,
				maxSupply: BigInt(5),
				mintPrice: parseEther("0.25"),
				versions: 6,
				dropURI: dropURI,
			},
		},
	});

	console.log("Added file:", dropURI);
	console.log(`Store deployed to: ${store.address}`);
}

main().catch(console.error);
