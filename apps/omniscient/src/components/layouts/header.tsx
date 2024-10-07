import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";
import { ThemeToggle } from "@web-playground/ui/system/themeToggle";
import { H1 } from "@web-playground/ui/system/typography";

const Header = () => {
	return (
		<HeaderPrimitive className="flex justify-between py-2">
			<H1 className="font-black tracking-tighter">Omniscient</H1>

			<ThemeToggle />
		</HeaderPrimitive>
	);
};

export { Header };
