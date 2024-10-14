"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { ChainConfigsArray } from "@configs/schemas/chains";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import type { PropsWithChildren } from "react";
import { WagmiProvider as WagmiProviderPrimitive } from "wagmi";

/**
 * Blockchain config.
 */
export const config = getDefaultConfig({
	appName: "web-playground",
	projectId: "YOUR_PROJECT_ID",
	chains: ChainConfigsArray,
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
