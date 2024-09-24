import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AppState = {};

const useAppState = create<AppState>()(
	devtools(
		persist((set) => ({}), {
			name: "app-state",
		}),
	),
);

export { useAppState };
