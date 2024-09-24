import { cn } from "@web-playground/ui/shadcn/lib/utils/cn";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {}

const H0 = ({ children, className, ...props }: TypographyProps) => (
	<h1 className={cn("text-left text-4xl", className)} {...props}>
		{children}
	</h1>
);

const H1 = ({ children, className, ...props }: TypographyProps) => (
	<h1 className={cn("text-left text-2xl", className)} {...props}>
		{children}
	</h1>
);

const H2 = ({ children, className, ...props }: TypographyProps) => (
	<h2 className={cn("text-left text-xl", className)} {...props}>
		{children}
	</h2>
);

const H3 = ({ children, className, ...props }: TypographyProps) => (
	<h3 className={cn("text-left text-lg", className)} {...props}>
		{children}
	</h3>
);

const H4 = ({ children, className, ...props }: TypographyProps) => (
	<h4 className={cn("text-left text-base", className)} {...props}>
		{children}
	</h4>
);

const H5 = ({ children, className, ...props }: TypographyProps) => (
	<h5 className={cn("text-left text-sm", className)} {...props}>
		{children}
	</h5>
);

const H6 = ({ children, className, ...props }: TypographyProps) => (
	<h6 className={cn("text-left text-xs", className)} {...props}>
		{children}
	</h6>
);

const P = ({ children, className, ...props }: TypographyProps) => (
	<p className={cn("text-left text-base", className)} {...props}>
		{children}
	</p>
);

export { H0, H1, H2, H3, H4, H5, H6, P };
