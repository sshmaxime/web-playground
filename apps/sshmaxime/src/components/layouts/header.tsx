import { Separator } from "@web-playground/ui/shadcn/components/separator";
import { Box } from "@web-playground/ui/system/base/box";
import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";

import { H3, H4, P } from "@web-playground/ui/system/typography";

import Link from "next/link";
import { METADATA } from "src/metadata";

const Header = () => {
	return (
		<HeaderPrimitive>
			<Box className="space-y-4 pb-10 pt-3">
				<Box className="flex justify-between gap-4">
					<Box className="flex flex-col">
						<H3 className="self-start font-extrabold tracking-tight">
							Maxime A.
						</H3>
						<Box className="flex h-5 items-center gap-2">
							<P className="font-extrabold text-muted-foreground tracking-tight">
								Software Engineer
							</P>
							<Separator orientation="vertical" />
							<P className="font-extrabold tracking-tight">@ Smoo.th</P>
						</Box>
					</Box>
					{/* <Image height={60} src={Logo} alt="" /> */}
				</Box>

				<Separator />

				<Box className="flex justify-start space-x-3">
					<H4 className="font-semibold tracking-tighter underline underline-offset-4 ">
						<Link href={METADATA.HOME.href}>Home</Link>
					</H4>
					<H4 className="font-semibold tracking-tighter underline underline-offset-4">
						<Link href={METADATA.app.EDUCATION.href}>Education</Link>
					</H4>
					<H4 className="font-semibold tracking-tighter underline underline-offset-4">
						<Link href={METADATA.app.WORK.href}>Work</Link>
					</H4>
					<H4 className="font-semibold tracking-tighter underline underline-offset-4">
						<Link href={METADATA.app.MUSIC.href}>Music</Link>
					</H4>
					<H4 className="font-semibold tracking-tighter underline underline-offset-4">
						<Link href={METADATA.app.NOTES.href}>Notes</Link>
					</H4>
				</Box>

				<Separator />
			</Box>
		</HeaderPrimitive>
	);
};

export { Header };
