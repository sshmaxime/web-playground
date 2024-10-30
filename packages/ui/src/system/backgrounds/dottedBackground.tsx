import { Box } from "@web-playground/ui/system/base/box";
import { cn } from "@web-playground/ui/utils/cn";
import type { ClassNameValue } from "tailwind-merge";

const DottedBackground = () => {
	const baseStyles: ClassNameValue = "absolute w-full h-full -z-10";
	const dotBackgroundStyles: ClassNameValue =
		"opacity-[0.1] dark:opacity-[0.07] bg-[radial-gradient(theme(colors.primary.DEFAULT)_1px,transparent_0)] bg-[size:20px_20px] bg-[position:-19px_-19px]";
	return <Box className={cn(baseStyles, dotBackgroundStyles)} />;
};

export { DottedBackground };
