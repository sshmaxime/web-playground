"use client";

import type { PropsWithChildren } from "react";

import { http } from "viem";
import { WagmiProvider as WagmiProviderPrimitive, createConfig } from "wagmi";
import {
	arbitrumSepolia,
	baseSepolia,
	holesky,
	optimismSepolia,
} from "wagmi/chains";

/**
 * Blockchain config.
 */
// Ethereum Holesky, Omni Omega, Arbitrum Sepolia, Optimism Sepolia, Base Sepolia
const config = createConfig({
	chains: [optimismSepolia, holesky, arbitrumSepolia, baseSepolia],
	transports: {
		[optimismSepolia.id]: http(
			"https://opt-sepolia.g.alchemy.com/v2/s892w_3Kxzw6WIPSPVYVT-rufLLDo7pp",
		),
		[holesky.id]: http(""),
		[arbitrumSepolia.id]: http(""),
		[baseSepolia.id]: http(""),
	},
});

/**
 * Blockchain provider.
 */
const BlockchainProvider = ({ children }: PropsWithChildren) => (
	<WagmiProviderPrimitive config={config}>{children}</WagmiProviderPrimitive>
);

export { config, BlockchainProvider };
