"use server";

import { OmniPortalABI } from "@config/abis/OmniPortal";
import { OMNI_PORTAL_ADDRESS } from "@config/chain";
import { config } from "@config/providers/blockchain";
import { readContract } from "@wagmi/core";

const getNetworks = async () => {
	const network = await readContract(config, {
		abi: OmniPortalABI,
		address: OMNI_PORTAL_ADDRESS,
		functionName: "network",
		args: [BigInt(0)],
	});

	return network;
};

export { getNetworks };
