"use client";

import "@rainbow-me/rainbowkit/styles.css";

import type { PropsWithChildren } from "react";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider as WagmiProviderPrimitive } from "wagmi";
import { mainnet } from "wagmi/chains";

/**
 * Blockchain config.
 */
const config = getDefaultConfig({
	appName: "deblock-hq",
	projectId: "YOUR_PROJECT_ID",
	chains: [mainnet],
	ssr: true,
});

/**
 * Blockchain provider.
 */
const BlockchainProvider = ({ children }: PropsWithChildren) => (
	<WagmiProviderPrimitive config={config}>
		<RainbowKitProvider>{children}</RainbowKitProvider>
	</WagmiProviderPrimitive>
);

export { BlockchainProvider };
