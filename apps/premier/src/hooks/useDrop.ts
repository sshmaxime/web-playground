import { drop } from "@server/actions/drop";
import { useQuery } from "@tanstack/react-query";

const useDrop = (dropId: bigint) => {
	const { data: rawData } = useQuery({
		queryKey: ["useDrop"],
		queryFn: async () => await drop(dropId),
	});

	return rawData;
};

export { useDrop };
