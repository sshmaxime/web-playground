import { Btc } from "@assets/crypto/btc";
import { Eth } from "@assets/crypto/eth";
import { z } from "zod";

/**
 * @dev List of our supported coins.
 */
const COINS = ["BTC", "ETH", "USDT"] as const;
type COINS = (typeof COINS)[number];

/**
 * @dev Zod schema for a coin.
 */
const zCoin = z.object({
	id: z.string(),
	name: z.string(),
	symbol: z.enum(COINS),
});

/**
 * @dev A simple coin.
 */
type Coin = z.infer<typeof zCoin>;

/**
 * @dev List of all the coins.
 */
const Coins = {
	BTC: {
		id: "bitcoin",
		name: "Bitcoin",
		symbol: "BTC",
	},
	ETH: {
		id: "ethereum",
		name: "Ethereum",
		symbol: "ETH",
	},
	USDT: {
		id: "tether",
		name: "Tether",
		symbol: "USDT",
	},
} as const satisfies { [key in COINS]: Coin };

/**
 * @dev List of all the coins' icons.
 */
const Icons = {
	BTC: Btc,
	ETH: Eth,
	USDT: Eth,
} as const satisfies {
	[key in COINS]: ({ size }: { size: number }) => JSX.Element;
};

/**
 * @dev List of all whitelisted coins to exchange from.
 */
const WhitelistExchangeFrom = [Coins.ETH];

/**
 * @dev List of all whitelisted coins to exchange to.
 */
const WhitelistExchangeTo = [Coins.BTC, Coins.USDT];

export { COINS, type Coin, Coins, zCoin, Icons, WhitelistExchangeFrom, WhitelistExchangeTo };
