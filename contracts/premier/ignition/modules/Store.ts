import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Store = buildModule("Store", (m) => {
	const store = m.contract("Store");
	return { store };
});

export default Store;
