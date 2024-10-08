import { Button } from "@web-playground/ui/shadcn/components/button";
import { Box } from "@web-playground/ui/system/base/box";
import { Footer as FooterPrimitive } from "@web-playground/ui/system/layouts/footer";
import { H6 } from "@web-playground/ui/system/typography";
import PackageJson from "../../../package.json";

const Footer = () => {
	return (
		<Box className="bg-accent">
			<FooterPrimitive>
				<div className="flex flex-col gap-1 px-2 py-2 md:flex-row md:justify-between md:gap-0 items-center">
					<H6 className="font-semibold">Omniscient</H6>

					<div className="flex items-center gap-1">
						<H6 className="font-normal">
							Made with love by
							<Button variant="ghost" className="h-auto p-0">
								&nbsp;
								<H6 className="underline underline-offset-4">@sshmaxime</H6>
								&nbsp;
							</Button>
						</H6>
					</div>

					<div>
						<span className="text-xs font-semibold">v{PackageJson.version}</span>
					</div>
				</div>
			</FooterPrimitive>
		</Box>
	);
};

export { Footer };
