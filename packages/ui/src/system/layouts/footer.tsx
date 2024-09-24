import { cn } from "@web-playground/ui/shadcn/lib/utils/cn";
import { Container } from "@web-playground/ui/system/base/container";
import type { PropsWithChildren } from "react";
import type { ClassNameValue } from "tailwind-merge";

type FooterProps = {
	className?: ClassNameValue;
} & PropsWithChildren;

const Footer = ({ children, className }: FooterProps) => (
	<Container className={cn(className)}>{children}</Container>
);

export { Footer };
