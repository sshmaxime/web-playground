"use client";

import type { PropsWithChildren } from "react";

import { QueryProvider } from "@config/providers/query";
import { ThemeProvider } from "@config/providers/theme";

/**
 * @dev
 */
const Providers = ({ children }: PropsWithChildren) => (
	<QueryProvider>
		<ThemeProvider>{children}</ThemeProvider>
	</QueryProvider>
);

export { Providers };
