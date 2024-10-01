"use client";

import type { PropsWithChildren } from "react";

import { BlockchainProvider } from "@config/providers/blockchain";
import { QueryProvider } from "@config/providers/query";
import { ThemeProvider } from "@config/providers/theme";

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
