import type { PropsWithChildren } from "react";

import { ThemeProvider as ThemeProviderPrimitive } from "@web-playground/ui/theme/provider";

/**
 * Theme provider.
 */
const ThemeProvider = ({ children }: PropsWithChildren) => (
	<ThemeProviderPrimitive
		attribute="class"
		defaultTheme="light"
		enableSystem
		disableTransitionOnChange
	>
		{children}
	</ThemeProviderPrimitive>
);

export { ThemeProvider };
