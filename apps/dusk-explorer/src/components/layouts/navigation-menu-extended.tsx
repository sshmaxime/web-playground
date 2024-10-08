import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import {
	NavigationMenuContent,
	NavigationMenuItem as NavigationMenuItemPrimitive,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@web-playground/ui/shadcn/components/navigation-menu";
import { cn } from "@web-playground/ui/utils/cn";
import Link from "next/link";
import React, { type PropsWithChildren } from "react";
import { useClient } from "../../utils";
import type { PageMetadata } from "../../utils/types";

type Props = {
	activated?: boolean;
};

const reset = `
  data-[state=open]:text-primary
  data-[state=closed]:text-muted-foreground
  data-[state=open]:bg-transparent 
  data-[active]:bg-transparent 
  focus:bg-transparent 
  bg-transparent 
  hover:bg-transparent
  
  dark:data-[state=open]:text-primary
  dark:data-[state=closed]:text-muted-foreground
  dark:data-[state=open]:bg-transparent 
  dark:data-[active]:bg-transparent 
  dark:focus:bg-transparent 
  dark:hover:bg-transparent
  dark:bg-transparent 
  
  outline-none 
  h-auto
  `;

const alpha = `
  relative
  transition-all
  duration-700

  h-14 
  before:transition-all 
  before:duration-700 
  before:rounded-3xl 
  before:w-full 
  before:h-[3px] 
  before:absolute 
  before:left-0 
  before:bottom-0 

  before:scale-x-0 
  hover:before:scale-x-100 

  before:origin-left 

  before:hover:bg-accent 

  data-[state=open]:before:scale-x-100
  data-[state=open]:before:bg-accent
`;

const customNavigationMenuTriggerStyle = ({ activated: actived }: Props) =>
	cn(
		navigationMenuTriggerStyle(),
		reset,
		alpha,
		actived
			? "text-primary before:hover:bg-primary before:scale-x-100 before:bg-primary data-[state=open]:before:bg-primary data-[state=closed]:text-primary"
			: "text-muted-foreground",
	);

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & Props
>(({ className, title, children, activated, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						activated ? "bg-muted" : "bg-transparent",
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

const NavigationMenuItem = ({
	children,
	item,
}: PropsWithChildren & { item: PageMetadata }) => {
	const { fullRoute, route } = useClient();

	return (
		<NavigationMenuItemPrimitive>
			<Link href={`/${item.href}`} passHref>
				<NavigationMenuTrigger
					className={customNavigationMenuTriggerStyle({
						activated:
							fullRoute === item.href ||
							(!!route && item.href.startsWith(route)),
					})}
				>
					{item.name}
				</NavigationMenuTrigger>
			</Link>

			<NavigationMenuContent className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-0 top-0 w-full sm:w-auto">
				{children}
			</NavigationMenuContent>
		</NavigationMenuItemPrimitive>
	);
};

export { customNavigationMenuTriggerStyle, NavigationMenuItem, ListItem };
