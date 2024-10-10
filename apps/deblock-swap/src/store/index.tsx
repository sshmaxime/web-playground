import { Currencies, type Currency } from "@configs/currencies";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
	currency: Currency;
	updateCurrency: (newCurrency: Currency) => void;
}

const useAppState = create<AppState>()(
	devtools((set) => ({
		currency: Currencies.USD,
		updateCurrency: (newCurrency) => set(() => ({ currency: newCurrency })),
	})),
);

export { useAppState };
