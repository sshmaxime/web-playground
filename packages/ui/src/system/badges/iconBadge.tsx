import { Box } from "@web-playground/ui/system/base/box";

interface Props extends React.HTMLAttributes<HTMLElement> {
	IconFront?: React.ElementType;
	IconBack?: React.ElementType;
}

const IconBadge = ({ IconFront, IconBack, children }: Props) => (
	<Box className="inline-flex rounded-full px-2 text-sm h-6 items-center shadow gap-2 bg-sidebar">
		{IconFront && <IconFront className="h-3 w-3" />}
		{children}
		{IconBack && <IconBack className="h-3 w-3" />}
	</Box>
);

export { IconBadge };
