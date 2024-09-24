import "@web-playground/ui/globals.css";
import "./system.css";

import { Analytics } from "@vercel/analytics/react";

import { fontSans } from "@web-playground/ui/fonts";

import { Providers } from "@config/providers";

import { Footer } from "@components/layouts/footer";
import { Header } from "@components/layouts/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dusk Explorer",
	description: "Explorer for the Dusk blockchain.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={fontSans.className} suppressHydrationWarning>
			<meta name="theme-color" content="transparent" />

			<body className="flex-col antialiased">
				<Providers>
					<div
						data-vaul-drawer-wrapper=""
						className="flex flex-col bg-background min-h-[100dvh]"
					>
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
