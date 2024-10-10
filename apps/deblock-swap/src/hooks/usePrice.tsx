import type { Coin } from "@configs/coins";
import { useQuery } from "@tanstack/react-query";
import { useAppState } from "src/store";

const fetchPrice = async (coinIds?: string[], currIds?: string[]) => {
	return fetch(
		`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds?.join(",")},&vs_currencies=${currIds?.join(",")}`,
	).then((res) => res.json());
};

type UsePrice = {
	from: { amount: number; coin: Coin };
	to: { coin: Coin };
};

/**
 * @dev Get price.
 */
const usePrice = ({ from, to }: UsePrice) => {
	const returnedPrice = {
		amountTo: 0,
		priceFrom: 0,
	};

	const { currency } = useAppState();
	const currencyId = currency.id;

	const { isPending, error, data } = useQuery({
		queryKey: ["price", from.coin?.id, to.coin?.id, currencyId],
		queryFn: () => fetchPrice([from.coin?.id, to.coin?.id], [currencyId]),
	});

	if (isPending) return returnedPrice;
	if (error) {
		console.log("We are hitting the rate limit on the API, wait a minute or two.");
		return returnedPrice;
	}

	const priceFrom = data[from.coin.id][currencyId];
	const priceTo = data[to.coin.id][currencyId];

	const amountTo = (from.amount * priceFrom) / priceTo;

	return { amountTo, priceFrom };
};

export { usePrice };
