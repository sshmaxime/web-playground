import { z } from "zod";

import type { Types } from "@web-playground/crypto";

/**
 * Portal.
 *
 * @dev List of all the portals schemas and types.
 */
const zPortalStats = z.object({
	outXMsgOffset: z.bigint(),
	inXMsgOffset: z.bigint(),
});
type PortalStats = z.infer<typeof zPortalStats>;

const zXMsgEvent = z.object({
	destChainId: z.bigint().optional(),
	shardId: z.bigint().optional(),
	offset: z.bigint().optional(),
	sender: z.string().optional(),
	to: z.string().optional(),
	data: z.string().optional(),
	gasLimit: z.bigint().optional(),
	fees: z.bigint().optional(),
});
type XMsgEvent = z.infer<typeof zXMsgEvent>;
type XMsgEventReadable = Types.MakeChainObjectReadable<XMsgEvent>;

const zXReceiptEvent = z.object({
	sourceChainId: z.bigint().optional(),
	shardId: z.bigint().optional(),
	offset: z.bigint().optional(),
	gasUsed: z.bigint().optional(),
	relayer: z.string().optional(),
	success: z.boolean().optional(),
	error: z.string().optional(),
});
type XReceiptEvent = z.infer<typeof zXReceiptEvent>;
type XReceiptEventReadable = Types.MakeChainObjectReadable<XReceiptEvent>;

type PortalLatestXMsg = { XMsgEvents: XMsgEvent[]; XReceiptEvents: XReceiptEvent[] };

export {
	zPortalStats,
	type PortalStats,
	zXMsgEvent,
	type XMsgEvent,
	zXReceiptEvent,
	type XReceiptEvent,
	type PortalLatestXMsg,
	type XMsgEventReadable,
	type XReceiptEventReadable,
};
