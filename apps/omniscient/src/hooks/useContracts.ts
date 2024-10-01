import { OmniPortalABI } from "@config/abis/OmniPortal";
import { OMNI_PORTAL_ADDRESS } from "@config/chain";
import { useReadContract } from "wagmi";

const useOmniPortals = () => {
	const { data, error } = useReadContract({
		abi: OmniPortalABI,
		address: OMNI_PORTAL_ADDRESS,
		functionName: "network",
		args: [BigInt(0)],
	});

	console.log(data?.toString());

	const { data: inXMsgOffset } = useReadContract({
		abi: OmniPortalABI,
		address: OMNI_PORTAL_ADDRESS,
		functionName: "inXMsgOffset",
	});

	const { data: outXMsgOffset } = useReadContract({
		abi: OmniPortalABI,
		address: OMNI_PORTAL_ADDRESS,
		functionName: "outXMsgOffset",
	});

	return { inXMsgOffset, outXMsgOffset };
};

export { useOmniPortals };
