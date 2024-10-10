"use client";

import type { PropsWithChildren } from "react";

import { BlockchainProvider } from "@configs/providers/blockchain";
import { QueryProvider } from "@configs/providers/query";
import { ThemeProvider } from "@configs/providers/theme";

/**
 *
 */
const Providers = ({ children }: PropsWithChildren) => (
	<QueryProvider>
		<BlockchainProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</BlockchainProvider>
	</QueryProvider>
);

export { Providers };
