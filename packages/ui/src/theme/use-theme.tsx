"use client";

import { useTheme as useThemePrimitive } from "next-themes";
import { useEffect, useState } from "react";

const useTheme = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useThemePrimitive();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return undefined;
	return resolvedTheme;
};

export { useTheme };
