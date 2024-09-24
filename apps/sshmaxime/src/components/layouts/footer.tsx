import { Footer as FooterPrimitive } from "@web-playground/ui/system/layouts/footer";

import Link from "next/link";

import {
	SiGithub,
	SiLinkedin,
	SiTelegram,
	SiX,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
	return (
		<FooterPrimitive className="flex justify-center gap-4 pb-4 pt-14">
			<Link href="https://twitter.com/sshmaxime">
				<SiX />
			</Link>

			<Link href="https://github.com/sshmaxime">
				<SiGithub />
			</Link>

			<Link href="https://www.linkedin.com/in/sshmaxime/">
				<SiLinkedin />
			</Link>

			<Link href="https://t.me/sshmaxime">
				<SiTelegram />
			</Link>
		</FooterPrimitive>
	);
};

export { Footer };
