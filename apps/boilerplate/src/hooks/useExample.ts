import { EXAMPLE_ADDRESS } from "@configs/constants/addresses";
import { getBalance } from "@server/actions/example";
import { useQuery } from "@tanstack/react-query";
import { useBalance } from "wagmi";

const useExampleClient = () => {
	const balance = useBalance({ address: EXAMPLE_ADDRESS });
	return balance.data?.value;
};

const useExampleServer = () => {
	const { data: rawData } = useQuery({
		queryKey: ["useExampleServer"],
		queryFn: () => getBalance(),
	});

	return rawData;
};

export { useExampleClient, useExampleServer };
