"use client";

import { ConnectButton as ConnectButtonPrimitive } from "@rainbow-me/rainbowkit";

import { Button } from "@web-playground/ui/shadcn/components/button";
import { Box } from "@web-playground/ui/system/base/box";
import Image from "next/image";

import { H6 } from "@web-playground/ui/system/typography";
import { ChevronUp } from "lucide-react";

const ConnectButton = () => {
	return (
		<ConnectButtonPrimitive.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Note: If your app doesn't use authentication, you
				// can remove all 'authenticationStatus' checks
				const ready = mounted && authenticationStatus !== "loading";
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === "authenticated");
				return (
					<Box
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									<Button size="sm" className="tracking-tight" onClick={openConnectModal}>
										Connect Wallet
									</Button>
								);
							}

							if (chain.unsupported) {
								return (
									<Button size="sm" className="tracking-tight" onClick={openChainModal}>
										Wrong network
									</Button>
								);
							}

							return (
								<Box className="flex gap-2">
									<Button
										className="group flex items-center text-xs gap-1"
										variant="secondary"
										onClick={openChainModal}
									>
										{chain.iconUrl && (
											<Box
												className="rounded-full mr-1"
												style={{ background: chain.iconBackground }}
											>
												<Box className="w-6 h-6 relative rounded-full">
													<Image
														alt={chain.name ?? "Chain icon"}
														src={chain.iconUrl}
														fill={true}
														objectFit="cover"
													/>
												</Box>
											</Box>
										)}

										<H6 className="font-semibold">{chain.name}</H6>

										<Box className="">
											<ChevronUp className="w-4 h-4 group-hover:-translate-y-[2px] transition-all" />
										</Box>
									</Button>

									<Button className="text-xs" onClick={openAccountModal}>
										{account.displayName}
									</Button>
								</Box>
							);
						})()}
					</Box>
				);
			}}
		</ConnectButtonPrimitive.Custom>
	);
};

export { ConnectButton };
