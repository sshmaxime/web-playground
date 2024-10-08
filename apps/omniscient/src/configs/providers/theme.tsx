import type { PropsWithChildren } from "react";

import { ThemeProvider as ThemeProviderPrimitive } from "@web-playground/ui/theme/provider";

/**
 * @dev Theme provider.
 */
const ThemeProvider = ({ children }: PropsWithChildren) => (
	<ThemeProviderPrimitive
		attribute="class"
		defaultTheme="system"
		enableSystem
		disableTransitionOnChange
	>
		{children}
	</ThemeProviderPrimitive>
);

export { ThemeProvider };
