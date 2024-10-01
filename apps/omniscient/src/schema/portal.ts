import { z } from "zod";

/**
 * Portal.
 *
 * @dev List of all the portals schemas and types.
 */
const zPortalStats = z.object({
	xmsgReceived: z.bigint(),
	xmsgSent: z.bigint(),
	activitySinceLastWeek: z.array(z.number()),
});
type PortalStats = z.infer<typeof zPortalStats>;

const zXMsgEvent = z.object({
	destChainId: z.number(),
	shardId: z.number(),
	offset: z.number(),
	sender: z.string(),
	to: z.string(),
	data: z.string(),
	gasLimit: z.number(),
	fees: z.number(),
});
type XMsgEvent = z.infer<typeof zXMsgEvent>;

const zXReceipt = z.object({
	sourceChainId: z.number(),
	shardId: z.number(),
	offset: z.number(),
	gasUsed: z.number(),
	relayer: z.string(),
	success: z.boolean(),
	error_: z.string(),
});
type XReceipt = z.infer<typeof zXReceipt>;

export {
	zPortalStats,
	type PortalStats,
	zXMsgEvent,
	type XMsgEvent,
	zXReceipt,
	type XReceipt,
};
