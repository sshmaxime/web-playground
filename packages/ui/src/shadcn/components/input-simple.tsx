import * as React from "react";

import { cn } from "@web-playground/ui/shadcn/lib/utils/cn";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputSimple = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					"focus:ring-0 focus:ring-offset-0 outline-none",
					className,
				)}
				{...props}
			/>
		);
	},
);

InputSimple.displayName = "Input";

export { InputSimple };
