import { drop } from "@server/actions/drop";

import { useQuery } from "@tanstack/react-query";
import { queryOptions as queryOptionsPrimitive } from "@tanstack/react-query";

import type { AppChainId } from "@configs/schemas/chains";

/**
 * @dev
 */
type Props = { dropId: bigint; chainId: AppChainId };

/**
 * @dev
 */
const DropByIdQueryOptions = ({ dropId, chainId }: Props) =>
	queryOptionsPrimitive({
		queryKey: ["useDrop", dropId.toString(), chainId],
		queryFn: () => drop(dropId, chainId),
	});

/**
 * @dev
 */
const useDropById = (props: Props) => {
	return useQuery(DropByIdQueryOptions(props));
};

export { useDropById, DropByIdQueryOptions };
