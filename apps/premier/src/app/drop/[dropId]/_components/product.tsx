"use client";

import { Badge } from "@web-playground/ui/shadcn/components/badge";
import { Button } from "@web-playground/ui/shadcn/components/button";
import { Separator } from "@web-playground/ui/shadcn/components/separator";
import { Box } from "@web-playground/ui/system/base/box";
import { H0, H1, H4, H6 } from "@web-playground/ui/system/typography";
import { TokenETH } from "@web3icons/react";
import { WandSparkles, Zap } from "lucide-react";

import { ExternalLink } from "lucide-react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { chainIdAsChainName } from "@configs/schemas/chains";
import { ipfsUrl } from "@server/config/ipfs";
import { useQueryClient } from "@tanstack/react-query";
import { useWriteStoreMint } from "@web-playground/contracts-premier/wagmi.ts";
import parse from "html-react-parser";
import Link from "next/link";
import { Drawer } from "src/app/drop/[dropId]/_components/drawer";
import { useDropStore } from "src/app/drop/[dropId]/store";
import { formatEther } from "viem";
import { useChainId, useSwitchChain } from "wagmi";

const Product = () => {
	return (
		<>
			<Header />
			<Separator className="mt-2 bg-border/50" />
			<Box className="flex-1 relative [mask-image:linear-gradient(to_bottom,_transparent_10px,_black_24px,_black_calc(100%_-_24px),_transparent_100%)]">
				<Drawer />
				<Description />
			</Box>

			<Footer />
		</>
	);
};

const Header = () => {
	const drop = useDropStore((s) => s.drop);
	const chainId = chainIdAsChainName(useChainId());

	const buttonDisabled = !drop;

	return (
		<header className="p-4 pb-0 pr-[var(--app-px)]">
			<Box>
				<Box className="space-y-1">
					<H6 className="text-muted-foreground tracking-tighter">{drop?.symbol ?? <Skeleton />}</H6>

					<Box className="flex justify-between items-center gap-10">
						<H0 className="font-black tracking-tighter grow">{drop?.name ?? <Skeleton />}</H0>

						{drop ? (
							<Box>
								<Badge className="rounded">{chainId}</Badge>
							</Box>
						) : (
							<Skeleton width={100} />
						)}
					</Box>
				</Box>

				<Box className="flex gap-2 mt-3">
					<Button
						variant="secondary"
						disabled={buttonDisabled}
						className="h-6 p-2"
						asChild={!buttonDisabled}
					>
						<Link
							className="flex items-center gap-1"
							href={ipfsUrl(drop?.dropURI ?? "")}
							target="_blank"
						>
							<H6>Contract</H6>
							<ExternalLink className="w-3 h-3" />
						</Link>
					</Button>

					<Button
						variant="secondary"
						disabled={buttonDisabled}
						className="h-6 p-2"
						asChild={!buttonDisabled}
					>
						<Link
							className="flex items-center gap-1 "
							href={ipfsUrl(drop?.dropURI ?? "")}
							target="_blank"
						>
							<H6>IPFS</H6>
							<ExternalLink className="w-3 h-3" />
						</Link>
					</Button>
				</Box>
			</Box>
		</header>
	);
};

const Description = () => {
	const drop = useDropStore((s) => s.drop);

	const LoadingPlaceholder = () =>
		[5, 2, 1].map((count, index) => (
			<section key={count}>
				<H4 className="font-extrabold tracking-tighter mb-2">
					<Skeleton />
				</H4>

				<Box className="prose prose-sm prose-slate">
					<Skeleton count={count} />
				</Box>

				{index !== 3 - 1 && <Separator className="mt-4 bg-border/50" />}
			</section>
		));

	return (
		<Box className="absolute h-full w-full overflow-auto">
			<Box className="[&>*:first-child]:pt-4 [&>*:last-child]:pb-6 space-y-4 text-wrap px-4 pr-[var(--app-px)]">
				{!drop && <LoadingPlaceholder />}

				{drop?.metadata.informations.map((informationItem, index) => (
					<section key={informationItem.title}>
						<H4 className="font-extrabold tracking-tighter mb-2">{informationItem.title}.</H4>
						<Box className="prose prose-sm prose-slate">{parse(informationItem.html)}</Box>

						{index !== drop.metadata.informations.length - 1 && (
							<Separator className="mt-4 bg-border/50" />
						)}
					</section>
				))}
			</Box>
		</Box>
	);
};

const Footer = () => {
	const drop = useDropStore((s) => s.drop);

	const toggleOpenDrawer = useDropStore((s) => s.toggleOpenDrawer);

	const dropPriceAsEth = drop?.price ? formatEther(drop?.price) : undefined;

	const { writeContract: writeStoreMint } = useWriteStoreMint();
	const { switchChain } = useSwitchChain();
	const queryClient = useQueryClient();

	const chainId = useChainId();

	const mint = drop
		? () => {
				writeStoreMint(
					{ args: [drop?.id, 0], chainId: 31337, value: drop.price },
					{ onSettled: () => queryClient.invalidateQueries({ queryKey: ["useDrop"] }) },
				);
			}
		: undefined;

	return (
		<footer className="p-4 pt-0 pr-[var(--app-px)]">
			<Box className="flex justify-between items-center">
				<Box className="flex items-center py-3 grow">
					<TokenETH variant="branded" className="w-8 h-8" />

					<H1 className="font-bold tracking-tighter">
						{dropPriceAsEth ?? <Skeleton width={100} />}
					</H1>
				</Box>

				<Box>
					{drop ? (
						<Badge>
							<H6>
								{drop?.currentSupply.toString()} / {drop?.maxSupply.toString()}
							</H6>
						</Badge>
					) : (
						<Skeleton width={100} />
					)}
				</Box>
			</Box>

			<Box className="flex gap-2">
				<Button
					variant="outline"
					className="rounded tracking-tighter w-full gap-2 shrink-1"
					size="sm"
					onClick={toggleOpenDrawer}
				>
					<WandSparkles className="w-4 h-4" />
					<Box>Customize</Box>
				</Button>

				<Button
					className="rounded tracking-tighter w-full gap-2"
					size="sm"
					onClick={() => {
						if (drop) {
							if (chainId !== 31337) switchChain({ chainId: 31337 }, { onSuccess: () => mint?.() });
							else mint?.();
						}
					}}
				>
					<Zap className="w-4 h-4" />
					<Box>
						Mint {"{ "}
						<span className="font-extrabold">{drop?.name ?? "Placeholder"}</span>
						{" }"}
					</Box>
				</Button>
			</Box>
		</footer>
	);
};

export { Product };
