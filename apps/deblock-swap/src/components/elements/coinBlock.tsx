"use client";

import type { PropsWithChildren } from "react";

import type { Coin } from "@configs/coins";
import { useBalance } from "@hooks/useBalance";
import { useIcon } from "@hooks/useIcon";
import { Box } from "@web-playground/ui/system/base/box";
import { H2, H3, H6 } from "@web-playground/ui/system/typography";

type CoinBlockProps = { coin: Coin } & PropsWithChildren;

const CoinBlock = ({ coin }: CoinBlockProps) => {
	const balance = useBalance(coin);

	const Icon = useIcon(coin);

	return (
		<Box className="border cursor-pointer rounded-lg h-[84px] px-4 py-5 flex items-center space-x-[16px] transition-all">
			<Icon size={32} />

			<Box className="s">
				<H3>{coin.name}</H3>
				<H6 className="text-muted-foreground">{coin.symbol}</H6>
			</Box>

			<Box className="grow">
				<H2 className="text-right">{balance}</H2>
			</Box>
		</Box>
	);
};

export { CoinBlock };
