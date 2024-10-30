import { Box } from "@web-playground/ui/system/base/box";
import { Footer as FooterPrimitive } from "@web-playground/ui/system/layouts/footer";

import { H6 } from "@web-playground/ui/system/typography";
import PackageJson from "../../../package.json";

const Footer = () => {
	return (
		<Box className="bg-sidebar">
			<FooterPrimitive className="flex justify-between py-1">
				<H6 className="font-bold tracking-tighter">premierstudio.</H6>
				<H6 className="tracking-tight">v{PackageJson.version}.</H6>
			</FooterPrimitive>
		</Box>
	);
};

export { Footer };
