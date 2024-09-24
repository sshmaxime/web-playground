interface BoxProps extends React.HTMLAttributes<HTMLElement> {}

const Box = ({ children, ...props }: BoxProps) => (
	<div {...props}>{children}</div>
);

export { Box };
