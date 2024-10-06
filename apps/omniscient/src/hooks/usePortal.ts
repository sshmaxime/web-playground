import type { SupportedChain } from "@schemas/chains";
import type { XMsgEventReadable, XReceiptEventReadable } from "@schemas/portal";
import { useQuery } from "@tanstack/react-query";
import { getPortalLatestXMsg, getPortalXMsgStats } from "src/server/actions/omniPortal";

/**
 * @dev
 */
const usePortalXMsgStats = (chain: SupportedChain, filterChain?: SupportedChain) => {
	const { data: rawData, isLoading } = useQuery({
		queryKey: [chain, filterChain, "usePortalXMsgStats"],
		queryFn: () => getPortalXMsgStats(chain, filterChain),
	});

	const data = {
		outXMsgOffset: rawData?.outXMsgOffset.toString(),
		inXMsgOffset: rawData?.inXMsgOffset.toString(),
		totalXMsg: (
			(rawData?.outXMsgOffset ?? BigInt(0)) + (rawData?.inXMsgOffset ?? BigInt(0))
		).toString(),
	};

	return { data, isLoading, rawData };
};

/**
 * @dev
 */
const usePortalLatestXMsgXReceipt = (chain: SupportedChain, filterChain?: SupportedChain) => {
	const { data: rawData, isLoading } = useQuery({
		queryKey: [chain, filterChain, "usePortalLatestXMsg"],
		queryFn: () => getPortalLatestXMsg(chain, filterChain),
	});

	const data = {
		latestXMsgEvents: rawData?.XMsgEvents.map((item) => ({
			destChainId: item.destChainId?.toString(),
			shardId: item.shardId?.toString(),
			offset: item.offset?.toString(),
			sender: item.sender,
			to: item.to,
			data: item.data,
			gasLimit: item.gasLimit?.toString(),
			fees: item.fees?.toString(),
		})) as XMsgEventReadable[], // TODO not good.
		latestXReceiptEvents: rawData?.XReceiptEvents.map((item) => ({
			sourceChainId: item.sourceChainId?.toString(),
			shardId: item.shardId?.toString(),
			offset: item.offset?.toString(),
			gasUsed: item.gasUsed?.toString(),
			relayer: item.relayer,
			success: item.success,
			error: item.error,
		})) as XReceiptEventReadable[], // TODO not good.
	};

	return { data, isLoading, rawData };
};

export { usePortalXMsgStats, usePortalLatestXMsgXReceipt };
