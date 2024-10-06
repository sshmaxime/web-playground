"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ChainConfigs, type SupportedChain } from "@schemas/chains";

type AppStore = {
	chainName: SupportedChain;
	switchToChain: (chain: SupportedChain) => void;
	getChainConfig: () => ChainConfigs;
};

const useAppStore = create<AppStore>()(
	devtools((set, get) => ({
		chainName: "OmniOmega",
		switchToChain: (chain: SupportedChain) => set((state) => ({ ...state, chainName: chain })),
		getChainConfig: () => ChainConfigs[get().chainName],
	})),
);

export { useAppStore };
