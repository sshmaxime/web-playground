import type { Network } from "alchemy-sdk";

import { useQuery } from "@tanstack/react-query";
import { queryOptions as queryOptionsPrimitive } from "@tanstack/react-query";

import { fetchAccountNfts } from "@server/actions/nfts";

/**
 * @dev
 */
type Props = { address: string; network: Network; enabled: boolean };

/**
 * @dev
 */
const queryOptions = ({ address, network, enabled }: Props) =>
	queryOptionsPrimitive({
		queryKey: ["useAccountNfts", address, network],
		queryFn: () => fetchAccountNfts(address, network),
		enabled,
	});

/**
 * @dev
 */
const useAccountNfts = (props: Props) => {
	const { data: rawData } = useQuery(queryOptions(props));
	return rawData;
};

export { useAccountNfts };
