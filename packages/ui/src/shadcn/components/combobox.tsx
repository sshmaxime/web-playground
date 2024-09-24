"use client";

import * as React from "react";

import { Button } from "@web-playground/ui/components/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@web-playground/ui/components/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@web-playground/ui/components/popover";
import { cn } from "@web-playground/ui/shadcn/lib/utils/cn";
import { Check, ChevronsUpDown } from "lucide-react";

type Props = {
	searching: string;
	value: string;
	onChange: (_: string) => void;
	items: { value: string; logo?: React.ReactNode }[];
	className?: string;
};

export function Combobox({
	items,
	searching,
	value,
	onChange,
	className,
}: Props) {
	const [open, setOpen] = React.useState(false);

	const selectedValue = items.find((item) => item.value === value);
	const node = selectedValue ? (
		<div className="flex gap-2 items-center">
			{selectedValue.logo}
			{selectedValue.value}
		</div>
	) : undefined;

	return (
		<div className={cn(className)}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className={cn("w-[175px] justify-between capitalize")}
					>
						{node || `Select ${searching}...`}
						<ChevronsUpDown
							className={cn("ml-2 h-4 w-4 shrink-0 opacity-50")}
						/>
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-[175px] p-0">
					<Command>
						<CommandList>
							<CommandInput placeholder={`${searching} ...`} className="h-9" />
							<CommandEmpty>No {searching} found.</CommandEmpty>
							<CommandGroup>
								{items.map((item) => (
									<CommandItem
										key={item.value}
										value={item.value}
										className={cn(
											"capitalize",
											item.value === value ? "bg-accent" : "",
										)}
										onSelect={(currentValue) => {
											onChange(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										{item.value.toLowerCase()}
										<Check
											className={cn(
												"ml-auto h-4 w-4",
												value === item.value ? "opacity-100" : "opacity-0",
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
