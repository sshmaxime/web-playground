import { Scene as ScenePrimitive } from "@threejs/scenes/skate";
import { useDropStore } from "src/app/drop/[dropId]/store";

const Scene = () => {
	const drop = useDropStore((s) => s.drop);
	const setOpenDrawer = useDropStore((s) => s.setOpenDrawer);
	const sceneRef = useDropStore((s) => s.sceneRef);

	if (!drop) return null;
	return (
		<ScenePrimitive
			sceneRef={sceneRef}
			model={drop.metadata.model}
			versions={drop.metadata.versions}
			initialVersion={0}
			initialPlaceholderTexture={"/placeholder.png"}
			initialDropId={0}
			initialDripId={0}
			initialMaxSupply={0}
			actions={{ onSelected: () => setOpenDrawer(true) }}
		/>
	);
};

export { Scene };
