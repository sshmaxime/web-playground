import { useOmniPortals } from "@hooks/useContracts";
import type { Network } from "src/schema/networks";
import type { PortalStats, XMsgEvent, XReceipt } from "src/schema/portal";

const useGlobalPortalStats = (_: Network): PortalStats => {
	// 1. Run query
	const { inXMsgOffset, outXMsgOffset } = useOmniPortals();

	return {
		xmsgReceived: inXMsgOffset ?? BigInt(0),
		xmsgSent: outXMsgOffset ?? BigInt(0),
		activitySinceLastWeek: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	};
};

const usePortalLatestXMsgReceived = (_: Network) => {
	// 1. Run query

	return {
		latestXMsgReceived: [
			{
				sourceChainId: 1,
				shardId: 1,
				offset: 1,
				gasUsed: 1,
				relayer: "0x",
				success: true,
				error_: "0x",
			},
		] as XReceipt[],
	};
};

const usePortalLatestXMsgSent = (_: Network) => {
	// 1. Run query

	return {
		latestXMsgSent: [
			{
				shardId: 1,
				offset: 1,
				destChainId: 1,
				sender: "0x",
				to: "0x",
				data: "0x",
				gasLimit: 1,
				fees: 1,
			},
		] as XMsgEvent[],
	};
};

export {
	useGlobalPortalStats,
	usePortalLatestXMsgReceived,
	usePortalLatestXMsgSent,
};
