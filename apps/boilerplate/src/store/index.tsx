import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type AppState = {};

const useAppState = create<AppState>()(
	devtools(
		persist(() => ({}), {
			name: "app-state",
		}),
	),
);

export { useAppState };
