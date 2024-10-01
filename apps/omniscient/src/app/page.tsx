"use client";

import {
	useGlobalPortalStats,
	usePortalLatestXMsgReceived,
	usePortalLatestXMsgSent,
} from "@hooks/usePortalStats";
import { Card, CardHeader } from "@web-playground/ui/shadcn/components/card";

import { XMsgReceivedTable } from "@components/xMsgReceivedTable";
import { XMsgSentTable } from "@components/xMsgSentTable";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import { H1, H3, H4, H5, H6 } from "@web-playground/ui/system/typography";
import type { Network } from "src/schema/networks";

const App = () => {
	const network: Network = "Omni";

	const { xmsgReceived, xmsgSent, activitySinceLastWeek } =
		useGlobalPortalStats(network);

	const { latestXMsgReceived } = usePortalLatestXMsgReceived(network);
	const { latestXMsgSent } = usePortalLatestXMsgSent(network);

	return (
		<Container className="mt-10">
			<Box>
				<H1 className="font-bold tracking-tighter">Ethereum</H1>

				<Box className="bg-muted py-1 px-2 inline-block rounded">
					<H4 className="text-muted-foreground text-sm">Portal: 0x123456789</H4>
				</Box>
			</Box>

			<Box className="h-2" />

			<Box className="flex justify-between gap-4">
				<Card className="grow">
					<CardHeader>
						<H5 className="tracking-tight text-sm font-semibold">
							XMsgs received
						</H5>

						<H1 className="font-bold">{xmsgReceived}</H1>
					</CardHeader>
				</Card>

				<Card className="grow">
					<CardHeader>
						<H5 className="tracking-tight text-sm font-semibold">XMsgs sent</H5>

						<H1 className="font-bold">{xmsgSent}</H1>
					</CardHeader>
				</Card>

				<Card className="grow">
					<CardHeader>
						<Box className="flex gap-1 items-baseline">
							<H5 className="tracking-tight text-sm font-semibold">Activity</H5>
							<H6 className="text-muted-foreground">
								(Txs in the last 7 days)
							</H6>
						</Box>

						<H1 className="font-bold">{activitySinceLastWeek}</H1>
					</CardHeader>
				</Card>
			</Box>

			<Box className="h-8" />

			<Box className="grid grid-cols-8 gap-x-4">
				<Box className="col-span-4 space-y-2">
					<H3 className="font-bold tracking-tight">Latest XMsgs received</H3>

					<XMsgReceivedTable data={latestXMsgReceived} />
				</Box>

				<Box className="col-span-4 space-y-2">
					<H3 className="font-bold tracking-tight">Latest XMsgs sent</H3>

					<XMsgSentTable data={latestXMsgSent} />
				</Box>
			</Box>
		</Container>
	);
};

export default App;
