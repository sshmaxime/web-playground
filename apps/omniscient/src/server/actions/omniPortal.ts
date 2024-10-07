"use server";

import { OmniPortalABI } from "@config/abis/omniPortal";
import { OMNI_PORTAL_ADDRESS } from "@config/constants/addresses";
import { ChainConfigs, type SupportedChain } from "@schemas/chains";
import type { PortalLatestXMsg, PortalStats } from "@schemas/portal";
import { config } from "@server/blockchain/wagmi/config";
import { getPublicClient, readContract, readContracts } from "@wagmi/core";

const getSupportedNetworks = async (chainId: ChainConfigs["id"]) => {
	const networkIds: bigint[] = [];

	for (let index = BigInt(0); ; /** Infinite loop. */ index++) {
		try {
			const networkId = await readContract(config, {
				abi: OmniPortalABI,
				address: OMNI_PORTAL_ADDRESS,
				functionName: "network",
				args: [index],
				chainId,
			});

			networkIds.push(networkId);
		} catch {
			return networkIds;
		}
	}
};

const getPortalXMsgStats = async (
	chain: SupportedChain,
	filterChain?: SupportedChain,
): Promise<PortalStats> => {
	const chainConfig = ChainConfigs[chain];
	const chainId = chainConfig.id;

	const supportedNetworks = filterChain
		? [BigInt(ChainConfigs[filterChain].id)]
		: await getSupportedNetworks(chainId);

	let outXMsgOffset = BigInt(0);
	let inXMsgOffset = BigInt(0);

	const confLevelLatest = BigInt(1);
	const confLevelFinalized = BigInt(4);

	for (const supportedNetwork of supportedNetworks) {
		const [
			{ result: outXMsgOffsetLatest },
			{ result: outXMsgOffsetFinalized },
			{ result: inXMsgOffsetLatest },
			{ result: inXMsgOffsetFinalized },
		] = await readContracts(config, {
			contracts: [
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "outXMsgOffset",
					args: [supportedNetwork, confLevelLatest],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "outXMsgOffset",
					args: [supportedNetwork, confLevelFinalized],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "inXMsgOffset",
					args: [supportedNetwork, confLevelLatest],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "inXMsgOffset",
					args: [supportedNetwork, confLevelFinalized],
					chainId,
				},
			],
		});

		outXMsgOffset += BigInt(outXMsgOffsetLatest ?? 0) + BigInt(outXMsgOffsetFinalized ?? 0);
		inXMsgOffset += BigInt(inXMsgOffsetLatest ?? 0) + BigInt(inXMsgOffsetFinalized ?? 0);
	}

	return { outXMsgOffset, inXMsgOffset };
};

const getPortalLatestXMsg = async (
	chain: SupportedChain,
	filterChain?: SupportedChain,
): Promise<PortalLatestXMsg> => {
	const chainConfig = ChainConfigs[chain];

	const publicClient = getPublicClient(config, { chainId: chainConfig.id });

	const currentBlock = await publicClient.getBlockNumber();
	const blockOffset = BigInt(1000);

	const destChainId = filterChain ? BigInt(ChainConfigs[filterChain].id) : undefined;
	const sourceChainId = filterChain ? BigInt(ChainConfigs[filterChain].id) : undefined;

	const rawXMsgEvents = await publicClient.getContractEvents({
		address: OMNI_PORTAL_ADDRESS,
		abi: OmniPortalABI,
		eventName: "XMsg",
		//
		args: destChainId ? { destChainId } : undefined,
		fromBlock: currentBlock - blockOffset,
		toBlock: "latest",
	});
	const XMsgEvents = rawXMsgEvents.map((item) => item.args);

	const rawXReceiptEvents = await publicClient.getContractEvents({
		address: OMNI_PORTAL_ADDRESS,
		abi: OmniPortalABI,
		eventName: "XReceipt",
		//
		args: sourceChainId ? { sourceChainId } : undefined,
		fromBlock: currentBlock - blockOffset,
		toBlock: "latest",
	});
	const XReceiptEvents = rawXReceiptEvents.map((item) => item.args);

	return { XMsgEvents, XReceiptEvents };
};

export { getPortalXMsgStats, getPortalLatestXMsg };
