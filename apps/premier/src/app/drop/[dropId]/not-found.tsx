"use client";

import { DEFAULT_CHAIN_ID } from "@configs/schemas/chains";
import { Button } from "@web-playground/ui/shadcn/components/button";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import { H0, H6 } from "@web-playground/ui/system/typography";
import { useSwitchChain } from "wagmi";

const NotFound = () => {
	const { switchChain } = useSwitchChain();

	return (
		<Container className="grow flex items-center justify-center">
			<Box className="space-y-4">
				<Box className="space-y-2">
					<H0 className="tracking-tighter font-bold text-5xl">Not Found.</H0>
					<H6 className="text-center">Try switching to main network.</H6>
				</Box>

				<Button
					className="table mx-auto"
					size="sm"
					variant="secondary"
					onClick={() =>
						switchChain({ chainId: DEFAULT_CHAIN_ID }, { onSuccess: () => location.reload() })
					}
				>
					<H6>Switch network</H6>
				</Button>
			</Box>
		</Container>
	);
};

export default NotFound;
