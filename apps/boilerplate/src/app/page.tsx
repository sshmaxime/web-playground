"use client";

import { useExampleClient, useExampleServer } from "@hooks/useExample";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";

const App = () => {
	const balanceClient = useExampleClient();
	const balanceServer = useExampleServer();

	return (
		<Container>
			<Box>Fetched from the client: {balanceClient?.toString()}</Box>
			<Box>Fetched from the server: {balanceServer?.toString()}</Box>
		</Container>
	);
};

export default App;
