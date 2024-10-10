import type { Coin } from "@configs/coins";
import { formatEther } from "viem";
import { useAccount, useBalance as useBalancePrimitive } from "wagmi";

/**
 * @dev Get user balance.
 */
const useBalance = (coin: Coin) => {
	const { address } = useAccount();
	const balance = useBalancePrimitive({ address });

	if (coin.symbol === "ETH") {
		return formatEther(balance.data?.value as bigint);
	}

	return 0;
};

export { useBalance };
