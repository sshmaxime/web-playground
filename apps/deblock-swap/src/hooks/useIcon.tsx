import { type Coin, Icons } from "@configs/coins";

/**
 * @dev Get icon.
 */
const useIcon = (coin: Coin) => Icons[coin.symbol];

export { useIcon };
