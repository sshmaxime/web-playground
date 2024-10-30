import type { Drop } from "@configs/schemas/drop";
import type { sceneRef } from "@threejs/scenes/skate";
import React from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type DropStore = {
	sceneRef: React.MutableRefObject<sceneRef>;

	drop: Drop | undefined;
	setDrop: (drop: Drop | undefined) => void;

	openDrawer: boolean;
	toggleOpenDrawer: () => void;
	setOpenDrawer: (openDrawer: boolean) => void;
};

const useDropStore = create<DropStore>()(
	devtools((set) => ({
		sceneRef: React.createRef<sceneRef>() as React.MutableRefObject<sceneRef>,

		drop: undefined,
		setDrop: (drop) => set(() => ({ drop: drop })),

		openDrawer: false,
		toggleOpenDrawer: () => set((s) => ({ openDrawer: !s.openDrawer })),
		setOpenDrawer: (openDrawer) => set(() => ({ openDrawer: openDrawer })),
	})),
);

export { useDropStore };
