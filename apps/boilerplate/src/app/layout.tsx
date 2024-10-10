import "@web-playground/ui/globals.css";
import "./system.css";

import { Analytics } from "@vercel/analytics/react";

import { inter } from "@web-playground/ui/fonts";

import { Providers } from "@configs/providers";

import { Footer } from "@components/layouts/footer";
import { Header } from "@components/layouts/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<meta name="theme-color" content="transparent" />

			<body className="flex-col antialiased">
				<Providers>
					<div data-vaul-drawer-wrapper="" className="flex flex-col bg-background min-h-[100dvh]">
						<Header />

						<main className="flex-grow flex flex-col">{children}</main>

						<Footer />
					</div>
				</Providers>

				<Analytics />
			</body>
		</html>
	);
}
