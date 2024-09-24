import type { PropsWithChildren } from "react";

import {
	TooltipContent,
	Tooltip as TooltipPrimitive,
	TooltipProvider,
	TooltipTrigger,
} from "@web-playground/ui/shadcn/components/tooltip";

type Props = { text: string } & PropsWithChildren;

const Tooltip = ({ text, children }: Props) => {
	return (
		<TooltipProvider delayDuration={300}>
			<TooltipPrimitive>
				<TooltipTrigger className="hover:cursor-default">
					{children}
				</TooltipTrigger>
				<TooltipContent className="max-w-xs p-3 text-xs">{text}</TooltipContent>
			</TooltipPrimitive>
		</TooltipProvider>
	);
};

export { Tooltip };
