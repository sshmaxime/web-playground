"use client";

import { Button } from "@web-playground/ui/shadcn/components/button";
import { InputSimple } from "@web-playground/ui/shadcn/components/input-simple";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import { H1, H3, H4, H5, H6 } from "@web-playground/ui/system/typography";

import {
	type Coin,
	Coins,
	WhitelistExchangeFrom,
	WhitelistExchangeTo,
	zCoin,
} from "@configs/coins";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@web-playground/ui/shadcn/components/drawer";
import { ArrowLeft, ArrowUpDown, ChevronDown, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { useDisconnect } from "wagmi";

import { CoinBlock } from "@components/elements/coinBlock";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIcon } from "@hooks/useIcon";
import { usePrice } from "@hooks/usePrice";
import { Form, FormControl, FormField, FormItem } from "@web-playground/ui/shadcn/components/form";
import { cn } from "@web-playground/ui/utils/cn";
import { type UseFormReturn, useForm, useWatch } from "react-hook-form";
import { useAppState } from "src/store";
import { z } from "zod";

interface DrawerContainerProps extends React.HTMLAttributes<HTMLElement> {}

const DrawerContainer = ({ children, className, ...props }: DrawerContainerProps) => (
	<Box className={cn("px-6 mx-auto max-w-[--app-w] w-full", className)} {...props}>
		{children}
	</Box>
);

const FormSchema = z.object({
	amount: z.number(),
	coin: zCoin,
});

type ExchangeBlockProps = {
	dir: "from" | "to";
	title: string;
	subtitle: string;
	form: UseFormReturn<z.infer<typeof FormSchema>>;
	coins: Coin[];
};
const ExchangeBlock = ({ title, subtitle, form, coins, dir }: ExchangeBlockProps) => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const coin = form.getValues("coin");
	const Icon = useIcon(coin);

	const isFrom = dir === "from";

	return (
		<Box
			className={cn(
				"shadow-md border rounded-lg h-[84px] px-4 py-3 space-y-[12px] transition-all",
				isDrawerOpen && "border-gray-500",
			)}
		>
			<Box className="flex justify-between">
				<H6 className="font-medium tracking-tight">{subtitle}</H6>
				{isFrom && <H6 className="text-blue-600">Max 99 EUR</H6>}
			</Box>

			<Box className="flex">
				<Box className="grow">
					<Form {...form}>
						<form className="w-full space-y-6">
							<FormField
								control={form.control}
								name="amount"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<InputSimple
												{...field}
												value={field.value ? field.value : ""}
												placeholder="0"
												type="number"
												className="w-full pr-3 text-[20px] font-medium leading-6"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</Box>

				<Drawer onOpenChange={setDrawerOpen} open={isDrawerOpen}>
					<DrawerTrigger>
						<Box className="flex items-center">
							<Icon size={24} />
							<H3 className="ml-[8px] mr-[6px]">{coin.symbol}</H3>
							<ChevronDown size={16} />
						</Box>
					</DrawerTrigger>

					<DrawerContent>
						<VisuallyHidden.VisuallyHidden>
							<DrawerTitle>{title}</DrawerTitle>
						</VisuallyHidden.VisuallyHidden>

						<DrawerHeader className="p-0">
							<DrawerContainer className="space-y-[40px] mb-[48px] mt-[28px]">
								<H3 className="text-left font-medium">{title}</H3>

								<Box className="space-y-[16px]">
									{coins.map((item) => (
										<Box
											key={item.name}
											onClick={() => {
												form.setValue("coin", item);
												setDrawerOpen(false);
											}}
										>
											<CoinBlock coin={item} />
										</Box>
									))}
								</Box>
							</DrawerContainer>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
			</Box>
		</Box>
	);
};

const Swap = () => {
	const { disconnect } = useDisconnect();

	const exchangeFromForm = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: { amount: 0, coin: Coins.ETH },
		mode: "onChange",
	});

	const exchangeToForm = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: { amount: 0, coin: Coins.BTC },
		mode: "onChange",
	});

	const { amount: exchangeFromAmount, coin: exchangeFromCoin } = useWatch({
		control: exchangeFromForm.control,
	});

	const { amount: _, coin: exchangeToCoin } = useWatch({
		control: exchangeToForm.control,
	});

	const { amountTo, priceFrom } = usePrice({
		// biome-ignore lint/suspicious/noExplicitAny: @TODO very bad, quick fix for now
		from: { amount: exchangeFromAmount as any, coin: exchangeFromCoin as any },
		// biome-ignore lint/suspicious/noExplicitAny: @TODO very bad, quick fix for now
		to: { coin: exchangeToCoin as any },
	});

	useEffect(() => {
		exchangeToForm.setValue("amount", amountTo);
	}, [exchangeToForm, amountTo]);

	const { currency } = useAppState();

	return (
		<Container>
			<Box className="inline-block">
				<Box
					className="flex gap-2 my-[34px] cursor-pointer items-center"
					onClick={() => disconnect()}
				>
					<ArrowLeft size={18} />
					<H4>Back</H4>
				</Box>
			</Box>

			<H1 className="mb-6 font-bold">Exchange</H1>

			<Box className="space-y-[16px] mb-10 gap-4">
				<Box className="space-y-[6px] relative">
					<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Box className="flex items-center justify-center border h-14 w-14 rounded-full bg-background">
							<Box className="flex items-center justify-center border h-11 w-11 rounded-full bg-background">
								<ArrowUpDown className="bg-background" size={18} />
							</Box>
						</Box>
					</Box>
					<ExchangeBlock
						form={exchangeFromForm}
						title="Exchange From"
						subtitle="You Pay"
						coins={WhitelistExchangeFrom}
						dir="from"
					/>
					<ExchangeBlock
						form={exchangeToForm}
						title="Exchange To"
						subtitle="You Receive"
						coins={WhitelistExchangeTo}
						dir="to"
					/>
				</Box>

				<Box className="flex justify-between">
					<Box className="flex gap-1 items-center">
						<Info size={12} />
						<H6>Fees included</H6>
						<ChevronDown size={16} />
					</Box>
					<H5>
						1 {exchangeFromCoin?.symbol} = {priceFrom} {currency.numeric}
					</H5>
				</Box>
			</Box>

			<Button className="w-full h-14">
				<H4>
					Exchange {exchangeFromCoin?.symbol} for {exchangeToCoin?.symbol}
				</H4>
			</Button>
		</Container>
	);
};

export { Swap };
