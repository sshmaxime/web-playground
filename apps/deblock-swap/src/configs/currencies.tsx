import { z } from "zod";

/**
 * @dev List of our supported coins.
 */
const CURRENCIES = ["USD", "EUR"] as const;
type CURRENCIES = (typeof CURRENCIES)[number];

/**
 * @dev Zod schema for a currency.
 */
const zCurrency = z.object({
	id: z.string(),
	name: z.string(),
	numeric: z.string(),
	symbol: z.enum(CURRENCIES),
});

/**
 * @dev A simple coin.
 */
type Currency = z.infer<typeof zCurrency>;

/**
 * @dev List of all the currencies.
 */
const Currencies = {
	USD: {
		id: "usd",
		name: "US Dollar",
		symbol: "USD",
		numeric: "$",
	},
	EUR: {
		id: "eur",
		name: "Euro",
		symbol: "EUR",
		numeric: "€",
	},
} as const satisfies { [key in CURRENCIES]: Currency };

// biome-ignore lint/style/useExportType: <explanation>
export { Currencies, CURRENCIES, type Currency };
