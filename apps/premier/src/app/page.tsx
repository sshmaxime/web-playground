"use client";

import React from "react";

import { Box } from "@web-playground/ui/system/base/box";
import { H1 } from "@web-playground/ui/system/typography";

import { useDrop } from "@hooks/useDrop";
import { Container } from "@web-playground/ui/system/base/container";
import type { sceneRef } from "src/threejs/scenes/skate";
import SceneLoader from "src/threejs/scenes/skate";

const App = () => {
	const sceneRef = React.useRef<sceneRef>(null!);

	const drop = useDrop(BigInt(0));

	return (
		<Container className="grow flex">
			{drop && (
				<SceneLoader
					sceneRef={sceneRef}
					model={drop?.metadata.model}
					versions={drop?.metadata.versions}
					initialVersion={1}
					initialPlaceholderTexture={"/placeholder.png"}
					initialDropId={0}
					initialDripId={0}
					initialMaxSupply={0}
				/>
			)}

			<Box className="w-96 border rounded p-2">
				<H1 className="font-bold tracking-tighter">Drop #{drop?.id.toString()}</H1>
			</Box>
		</Container>
	);
};

export default App;
