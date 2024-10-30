import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppState = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const useStore = create<AppState>()(
	devtools((set) => ({
		open: false,
		setOpen: (open) => set(() => ({ open: !open })),
	})),
);

export { useStore };
