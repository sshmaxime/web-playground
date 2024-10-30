"use client";

import { Separator } from "@web-playground/ui/shadcn/components/separator";
import { Box } from "@web-playground/ui/system/base/box";
import { H4, H6 } from "@web-playground/ui/system/typography";

import { ConnectButton } from "@components/buttons/connectButton";
import { useAccountNfts } from "@hooks/query/useNfts";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@web-playground/ui/shadcn/components/tabs";
import { Network, type OwnedNft } from "alchemy-sdk";
import Image from "next/image";
import { animated, useSpring } from "react-spring";
import { useDropStore } from "src/app/drop/[dropId]/store";
import { useAccount } from "wagmi";

type NftsBoxProps = {
	collectionName: string;
	nfts: OwnedNft[];
};
const NftsCollectionBox = ({ collectionName, nfts }: NftsBoxProps) => {
	const sceneRef = useDropStore((s) => s.sceneRef);

	return (
		<Box className="flex flex-col rounded gap-2">
			<Box>
				<H6 className="font-medium inline-block tracking-tighter rounded bg-border px-2 py-1">
					{collectionName}
				</H6>
			</Box>

			<Box className="grid grid-cols-7 rounded gap-2">
				{nfts.map((item) => (
					<Box
						key={item.tokenId}
						className="relative h-full w-full aspect-square rounded overflow-hidden hover:cursor-pointer"
						onClick={() => sceneRef.current.updateItem(item.image.pngUrl ?? "")}
					>
						<Image alt={item.name ?? ""} src={item.image.pngUrl ?? ""} fill />
					</Box>
				))}
			</Box>
		</Box>
	);
};

const Drawer = () => {
	const openDrawer = useDropStore((s) => s.openDrawer);

	const props = useSpring({
		left: 0,
		position: "absolute" as const,
		top: 0,
		backgroundColor: "white",
		height: "100%",
		width: "100%",
		transform: openDrawer ? "translate(0%)" : "translate(100%)",
		overflow: "auto",
		zIndex: 10,
	});

	const { address, isConnected, isDisconnected } = useAccount();

	const nftsOwned = useAccountNfts({
		address: address ?? "",
		network: Network.ETH_MAINNET,
		enabled: isConnected,
	});

	return (
		<animated.div style={props}>
			<Box className="relative p-4 h-full">
				<H4 className="font-extrabold tracking-tighter mb-2">Customization.</H4>

				{isDisconnected && (
					<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-2">
						<ConnectButton />
						<H6 className="text-center tracking-tighter font-medium">You need to be connected.</H6>
					</Box>
				)}

				{isConnected && nftsOwned && (
					<Tabs defaultValue="placeholder">
						<TabsList className="flex justify-start gap-2 px-2">
							<TabsTrigger className="text-xs" value="placeholder">
								Placeholder
							</TabsTrigger>
						</TabsList>

						<TabsContent value="placeholder">
							<Box className="space-y-2 p-2 bg-muted rounded">
								{Object.keys(nftsOwned).map((collectionName) => {
									return (
										<Box key={collectionName}>
											<NftsCollectionBox
												collectionName={collectionName}
												nfts={nftsOwned[collectionName]}
											/>

											<Separator className="mt-2" />
										</Box>
									);
								})}
							</Box>
						</TabsContent>
					</Tabs>
				)}
			</Box>
		</animated.div>
	);
};

export { Drawer };
