"use client";

import { ConnectButton as ConnectButtonPrimitive } from "@rainbow-me/rainbowkit";

const ConnectButton = () => (
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
				<div
					className="h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
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
								<button onClick={openConnectModal} type="button">
									Connect Wallet
								</button>
							);
						}

						if (chain.unsupported) {
							return (
								<button onClick={openChainModal} type="button">
									Wrong network
								</button>
							);
						}

						return (
							<div style={{ display: "flex", gap: 12 }}>
								<button onClick={openAccountModal} type="button">
									{account.displayName}
								</button>
							</div>
						);
					})()}
				</div>
			);
		}}
	</ConnectButtonPrimitive.Custom>
);

export { ConnectButton };
