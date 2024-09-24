"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@config/providers/theme";

/**
 *
 */
const Providers = ({ children }: PropsWithChildren) => (
	<ThemeProvider>{children}</ThemeProvider>
);

export { Providers };
