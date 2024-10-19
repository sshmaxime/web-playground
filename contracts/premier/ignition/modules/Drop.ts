import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import StoreModule from "./Store";

const Drop = buildModule("Drop", (m) => {
	const { store } = m.useModule(StoreModule);

	const dropId = m.getParameter("dropId", BigInt(0));

	const maxSupply = m.getParameter("maxSupply", BigInt(0));
	const mintPrice = m.getParameter("mintPrice", BigInt(0));
	const versions = m.getParameter("versions", 0);
	const dropURI = m.getParameter("dropURI", "ipfs://");

	m.call(store, "createDrop", [maxSupply, mintPrice, versions]);
	m.call(store, "setDropURI", [dropId, dropURI]);

	return { store };
});

export default Drop;
