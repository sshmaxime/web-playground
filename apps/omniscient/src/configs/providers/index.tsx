"use client";

import type { PropsWithChildren } from "react";

import { QueryProvider } from "@configs/providers/query";
import { ThemeProvider } from "@configs/providers/theme";

/**
 * @dev
 */
const Providers = ({ children }: PropsWithChildren) => (
	<QueryProvider>
		<ThemeProvider>{children}</ThemeProvider>
	</QueryProvider>
);

export { Providers };
