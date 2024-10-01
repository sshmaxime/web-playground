import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";
import { H1 } from "@web-playground/ui/system/typography";

const Header = () => {
	return (
		<HeaderPrimitive className="py-2">
			<H1 className="font-black tracking-tighter">Omniscient</H1>
		</HeaderPrimitive>
	);
};

export { Header };
