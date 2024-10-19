import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";

import { ThemeToggle } from "@web-playground/ui/system/themeToggle";

const Header = () => {
	return (
		<HeaderPrimitive>
			<ThemeToggle />
		</HeaderPrimitive>
	);
};

export { Header };
