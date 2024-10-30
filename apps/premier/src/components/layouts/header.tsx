import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";

import { Button } from "@web-playground/ui/shadcn/components/button";
import { H1 } from "@web-playground/ui/system/typography";

import { ConnectButton } from "@components/buttons/connectButton";

import { Box } from "@web-playground/ui/system/base/box";
import { Wallet } from "lucide-react";

const Header = () => {
	return (
		<HeaderPrimitive className="flex items-center justify-between h-14">
			<H1 className="font-black tracking-tighter">PREMIER</H1>

			<Box className="flex items-center gap-2">
				<ConnectButton />

				<Button variant="ghost" size="icon">
					<Wallet className="h-5 w-5" />
				</Button>
			</Box>
		</HeaderPrimitive>
	);
};

export { Header };
