"use client";

import { Mockup1 } from "@assets/design/mockup1";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import { H1 } from "@web-playground/ui/system/typography";

const Login = () => {
	return (
		<Container>
			<Box className="pt-[35%] space-y-4">
				<H1 className="font-extrabold tracking-tight text-5xl text-center">Deblock.</H1>

				<H1 className="tracking-tighter text-xl text-center">
					The crypto wallet merged with a current account.
				</H1>

				<Box className="pt-10 flex justify-center">
					<Mockup1 />
				</Box>
			</Box>
		</Container>
	);
};

export { Login };
