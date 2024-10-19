import type { PropsWithChildren } from "react";

import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box } from "@web-playground/ui/system/base/box";

const LoaderScene = ({ children }: PropsWithChildren) => {
	return (
		<Box className="flex w-full">
			<Canvas gl={{ antialias: true }} flat linear shadows>
				<Preload all />

				{children}
			</Canvas>
		</Box>
	);
};

export default LoaderScene;
