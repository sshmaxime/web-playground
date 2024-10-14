"use client";

import { useDropSupplyClient, useDropSupplyServer } from "@hooks/useDropSupply";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";

const App = () => {
	const dropSupplyClient = useDropSupplyClient();
	const dropSupplyServer = useDropSupplyServer();

	return (
		<Container>
			<Box>Fetched from the client: {dropSupplyClient?.toString()}</Box>
			<Box>Fetched from the server: {dropSupplyServer?.toString()}</Box>
			<ConnectButton />
		</Container>
	);
};

export default App;
