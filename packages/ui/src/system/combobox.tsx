"use client";

import { Button } from "@web-playground/ui/shadcn/components/button";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@web-playground/ui/shadcn/components/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@web-playground/ui/shadcn/components/popover";
import { Box } from "@web-playground/ui/system/base/box";
import { cn } from "@web-playground/ui/utils/cn";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

type Props = {
	searching: string;
	value: string | undefined;
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	onChange: Function;
	items: string[];
	className: string;
};

export function Combobox({ items, searching, value, onChange, className }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<Box className={className}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						{value ? items.find((framework) => framework === value) : "Select framework..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandInput placeholder={`${searching} ...`} />
						<CommandList>
							<CommandEmpty>No framework found.</CommandEmpty>

							<CommandGroup>
								{items.map((framework) => (
									<CommandItem
										key={framework}
										value={framework}
										className="cursor-pointer"
										onSelect={(currentValue) => {
											onChange(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												value === framework ? "opacity-100" : "opacity-0",
											)}
										/>
										{framework}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</Box>
	);
}
