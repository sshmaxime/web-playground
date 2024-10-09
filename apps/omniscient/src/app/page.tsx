"use client";

import { LoaderCircle } from "lucide-react";
import { useState } from "react";

import { cn } from "@web-playground/ui/utils/cn";

import { Card, CardHeader } from "@web-playground/ui/shadcn/components/card";
import { Separator } from "@web-playground/ui/shadcn/components/separator";

import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import { Combobox } from "@web-playground/ui/system/combobox";
import { CopyText } from "@web-playground/ui/system/copyText";
import { H1, H3, H4, H5, H6 } from "@web-playground/ui/system/typography";

import { XMsgEventTable } from "@components/tables/xMsgEventTable";
import { XReceiptEventTable } from "@components/tables/xReceiptEventTable";

import { OMNI_PORTAL_ADDRESS } from "@configs/constants/addresses";
import { ChainConfigs, type SupportedChain, zSupportedChain } from "@configs/schemas/chains";
import { usePortalLatestXMsgXReceipt, usePortalXMsgStats } from "@hooks/usePortal";
import { useAppStore } from "@store/app";

const App = () => {
	const { getChainConfig, switchToChain } = useAppStore();
	const chain = getChainConfig();

	const [chainFilter, setChainFilter] = useState<SupportedChain>();

	const supportedChains = Object.values(zSupportedChain.Enum);

	const {
		data: { outXMsgOffset, inXMsgOffset, totalXMsg },
		isLoading: isLoadingXMsgStats,
	} = usePortalXMsgStats(chain.omniId, chainFilter);

	const {
		data: { latestXMsgEvents, latestXReceiptEvents },
		isLoading: isLoadingLatestXMsgXReceipt,
	} = usePortalLatestXMsgXReceipt(chain.omniId, chainFilter);

	return (
		<Container className="mt-10">
			<Box className="space-y-1">
				<Box className="flex">
					{supportedChains.map((item) => (
						<Box key={item} className="flex" onClick={() => switchToChain(item)}>
							<H1
								className={cn(
									"transition-all font-bold tracking-tighter px-2 cursor-pointer text-muted-foreground",
									chain.omniId === item && "text-primary",
								)}
							>
								{ChainConfigs[item].name}
							</H1>

							<Separator orientation="vertical" />
						</Box>
					))}
				</Box>

				<Box>
					<Box className="bg-muted py-1 px-2 rounded inline-flex gap-2 items-center">
						<H4 className="text-muted-foreground text-sm">
							<b>Chain Id</b>: {chain.id}
						</H4>
						<CopyText
							textToCopy={chain.id.toString()}
							iconSize={14}
							className="text-muted-foreground"
						/>
					</Box>
				</Box>

				<Box>
					<Box className="bg-muted py-1 px-2 rounded inline-flex gap-2 items-center">
						<H4 className="text-muted-foreground text-sm">
							<b>Portal</b>: {OMNI_PORTAL_ADDRESS}
						</H4>
						<CopyText
							textToCopy={OMNI_PORTAL_ADDRESS}
							iconSize={14}
							className="text-muted-foreground"
						/>
					</Box>
				</Box>
			</Box>

			<Box className="h-4" />

			<Box className="space-y-1">
				<H4 className="font-bold">Filter by chain</H4>
				<Combobox
					items={supportedChains}
					searching="Chains"
					onChange={setChainFilter}
					value={chainFilter}
					className=""
				/>
			</Box>

			<Box className="h-2" />

			<Box className="flex justify-between gap-4">
				<Card className="grow">
					<CardHeader>
						<H5 className="tracking-tight text-sm font-medium">Total XMsgs received</H5>

						{isLoadingXMsgStats && <LoaderCircle className="animate-spin" />}
						{!isLoadingXMsgStats && <H1 className="font-bold">{inXMsgOffset}</H1>}
					</CardHeader>
				</Card>

				<Card className="grow">
					<CardHeader>
						<H5 className="tracking-tight text-sm font-medium">Total XMsgs sent</H5>

						{isLoadingXMsgStats && <LoaderCircle className="animate-spin" />}
						{!isLoadingXMsgStats && <H1 className="font-bold">{outXMsgOffset}</H1>}
					</CardHeader>
				</Card>

				<Card className="grow">
					<CardHeader>
						<H5 className="tracking-tight text-sm font-medium">Total XMsgs</H5>

						{isLoadingXMsgStats && <LoaderCircle className="animate-spin" />}
						{!isLoadingXMsgStats && <H1 className="font-bold">{totalXMsg}</H1>}
					</CardHeader>
				</Card>
			</Box>

			<Box className="h-8" />

			<Box className="col-span-4 space-y-2">
				<Box>
					<H3 className="font-bold tracking-tight">Latest XMsgs received</H3>
					<H6 className="text-muted-foreground tracking-tight">(Latest 1000 blocks)</H6>
				</Box>

				<XMsgEventTable data={latestXMsgEvents} isLoading={isLoadingLatestXMsgXReceipt} />
			</Box>

			<Box className="h-8" />

			<Box className="col-span-4 space-y-2">
				<Box>
					<H3 className="font-bold tracking-tight">Latest XMsgs sent</H3>
					<H6 className="text-muted-foreground tracking-tight">(Latest 1000 blocks)</H6>
				</Box>

				<XReceiptEventTable data={latestXReceiptEvents} isLoading={isLoadingLatestXMsgXReceipt} />
			</Box>

			<Box className="h-8" />
		</Container>
	);
};

export default App;
