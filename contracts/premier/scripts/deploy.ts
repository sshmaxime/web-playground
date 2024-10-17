import hre from "hardhat";
import StoreModule from "../ignition/modules/Store";

const defaultDeployConfig: Parameters<typeof hre.ignition.deploy>[1] = {
	strategy: "create2",
};

async function main() {
	const { store } = await hre.ignition.deploy(StoreModule, defaultDeployConfig);
	console.log(`Store deployed to: ${store.address}`);
}

main().catch(console.error);
