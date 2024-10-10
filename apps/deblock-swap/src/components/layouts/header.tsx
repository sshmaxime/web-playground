"use client";

import { Button } from "@web-playground/ui/shadcn/components/button";
import { Box } from "@web-playground/ui/system/base/box";
import { Header as HeaderPrimitive } from "@web-playground/ui/system/layouts/header";
import { ThemeToggle } from "@web-playground/ui/system/themeToggle";

import { Logo } from "@assets/design/logo";
import { ConnectButton } from "@components/elements/connectButton";
import { SelectCurrency } from "@components/elements/selectCurrency";

const Header = () => {
	return (
		<HeaderPrimitive className="flex items-center py-4">
			<Box className="grow">
				<Logo />
			</Box>

			<Box className="flex items-center gap-2">
				<Button asChild>
					<ConnectButton />
				</Button>

				<Box className="hidden xs:block">
					<ThemeToggle />
				</Box>

				<SelectCurrency />
			</Box>
		</HeaderPrimitive>
	);
};

export { Header };
