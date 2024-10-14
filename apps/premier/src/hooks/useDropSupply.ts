import { STORE_ADDRESS } from "@configs/constants/addresses";
import { getDropSupply } from "@server/actions/getDropSupply";
import { useQuery } from "@tanstack/react-query";
import { StoreABI } from "@web-playground/contracts-premier/StoreABI.ts";
import { useReadContract } from "wagmi";

const useDropSupplyClient = () => {
	const dropSupply = useReadContract({
		abi: StoreABI,
		address: STORE_ADDRESS,
		functionName: "dropSupply",
	});

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
