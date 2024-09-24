import { cn } from "@web-playground/ui/shadcn/lib/utils/cn";
import { Container } from "@web-playground/ui/system/base/container";
import type { PropsWithChildren } from "react";
import type { ClassNameValue } from "tailwind-merge";

type HeaderProps = {
	className?: ClassNameValue;
} & PropsWithChildren;

const Header = ({ children, className }: HeaderProps) => (
	<Container className={cn(className)}>{children}</Container>
);

export { Header };
