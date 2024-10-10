import { Box } from "@web-playground/ui/system/base/box";

import { CURRENCIES, Currencies } from "@configs/currencies";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@web-playground/ui/shadcn/components/select";
import { useAppState } from "src/store";

const SelectCurrency = () => {
	const { currency, updateCurrency } = useAppState();

	return (
		<Box>
			<Select
				defaultValue={currency.symbol}
				onValueChange={(newCurrency: CURRENCIES) => updateCurrency(Currencies[newCurrency])}
			>
				<SelectTrigger className="gap-2 text-lg">
					<SelectValue placeholder={currency.numeric} />
				</SelectTrigger>

				<SelectContent>
					<SelectGroup>
						{CURRENCIES.map((item) => {
							const currency = Currencies[item];
							return (
								<SelectItem key={currency.id} className="cursor-pointer" value={currency.symbol}>
									{currency.numeric}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</Box>
	);
};

export { SelectCurrency };
