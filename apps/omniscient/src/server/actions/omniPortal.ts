"use server";

import { OmniPortalABI } from "@config/abis/omniPortal";
import { OMNI_PORTAL_ADDRESS } from "@config/constants/addresses";
import { ChainConfigs, type SupportedChain } from "@schemas/chains";
import type { PortalLatestXMsg, PortalStats } from "@schemas/portal";
import { config } from "@server/blockchain/wagmi";
import { getPublicClient, readContract, readContracts } from "@wagmi/core";
import { usePublicClient } from "wagmi";

const getSupportedNetworks = async (chainId: ChainConfigs["id"]) => {
	const networkIds: bigint[] = [];
	usePublicClient;
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
	SupportedChain?: SupportedChain,
): Promise<PortalStats> => {
	const chainConfig = ChainConfigs[chain];
	const chainId = chainConfig.id;

	const supportedNetworks = SupportedChain
		? [BigInt(ChainConfigs[SupportedChain].id)]
		: await getSupportedNetworks(chainId);

	let outXMsgOffset = BigInt(0);
	let inXMsgOffset = BigInt(0);

	for (const supportedNetwork of supportedNetworks) {
		const [
			{ result: outXMsgOffsetShard1 },
			{ result: outXMsgOffsetShard4 },
			{ result: inXMsgOffsetShard1 },
			{ result: inXMsgOffsetShard4 },
		] = await readContracts(config, {
			contracts: [
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "outXMsgOffset",
					args: [supportedNetwork, BigInt(1)],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "outXMsgOffset",
					args: [supportedNetwork, BigInt(4)],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "inXMsgOffset",
					args: [supportedNetwork, BigInt(1)],
					chainId,
				},
				{
					abi: OmniPortalABI,
					address: OMNI_PORTAL_ADDRESS,
					functionName: "inXMsgOffset",
					args: [supportedNetwork, BigInt(4)],
					chainId,
				},
			],
		});

		outXMsgOffset += BigInt(outXMsgOffsetShard1 ?? 0) + BigInt(outXMsgOffsetShard4 ?? 0);
		inXMsgOffset += BigInt(inXMsgOffsetShard1 ?? 0) + BigInt(inXMsgOffsetShard4 ?? 0);
	}

	return { outXMsgOffset, inXMsgOffset };
};

const getPortalLatestXMsg = async (
	chain: SupportedChain,
	SupportedChain?: SupportedChain,
): Promise<PortalLatestXMsg> => {
	const chainConfig = ChainConfigs[chain];

	const publicClient = getPublicClient(config, {
		chainId: chainConfig.id,
	});

	const currentBlock = await publicClient.getBlockNumber();
	const blockOffset = BigInt(1000);

	const destChainId = SupportedChain ? BigInt(ChainConfigs[SupportedChain].id) : undefined;
	const sourceChainId = SupportedChain ? BigInt(ChainConfigs[SupportedChain].id) : undefined;

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
