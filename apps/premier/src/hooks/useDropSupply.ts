import { getDropSupply } from "@server/actions/getDropSupply";
import { useQuery } from "@tanstack/react-query";
import { useReadStoreDropSupply } from "@web-playground/contracts-premier/wagmi.ts";

const useDropSupplyClient = () => {
	const dropSupply = useReadStoreDropSupply();
	return dropSupply.data;
};

const useDropSupplyServer = () => {
	const { data: rawData } = useQuery({
		queryKey: ["useDropSupplyServer"],
		queryFn: () => getDropSupply(),
	});

	return rawData;
};

export { useDropSupplyClient, useDropSupplyServer };
