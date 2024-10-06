import { Box } from "@web-playground/ui/system/base/box";
import { cn } from "@web-playground/ui/utils/cn";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
	textToCopy: string;
	iconSize: number;
}

const CopyText = ({ textToCopy, iconSize, className }: Props) => {
	const [clicked, setClicked] = useState(false);

	const onClick = () => {
		setClicked(true);
		navigator.clipboard.writeText(textToCopy);
		setTimeout(() => setClicked(false), 1000);
	};

	return (
		<Box className="relative flex items-center">
			<CopyCheck
				size={iconSize}
				onClick={onClick}
				className={cn("transition-all", !clicked && "opacity-0", className, "text-primary")}
			/>

			<Copy
				size={iconSize}
				onClick={onClick}
				className={cn("transition-all cursor-pointer absolute", className, clicked && "opacity-0")}
			/>
		</Box>
	);
};

export { CopyText };
