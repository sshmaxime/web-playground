import * as THREE from "three";

import React, { type FC, Suspense, useImperativeHandle, useMemo } from "react";

import { type CameraControls, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import ModelSkate, {
	defaultSkateModelAnimation,
	type ModelMetadataProps,
	type SkateRefs,
	useSkateRefsLoader,
} from "../models/skate";

import { Bloom, EffectComposer, Outline, Selection } from "@react-three/postprocessing";
import LoaderScene from "src/threejs/utils/loaderScene";

export type sceneRef = ReturnType<typeof sceneFunctions>;
export type sceneRefType = React.MutableRefObject<sceneRef>;
const sceneFunctions = (
	refs: SkateRefs,
	camera: React.MutableRefObject<CameraControls>,
	props: ModelMetadataProps,
) => ({
	...refs,
	...defaultSkateModelAnimation(refs, props),
	reset3DView: () => camera.current?.setPosition(0, 40, -65, true),
});

const SkateScene: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = React.memo((props) => {
	const cameraControls = React.useRef<CameraControls>(null!);
	const refCam = React.useRef(null!);

	const refs = useSkateRefsLoader();
	useImperativeHandle(props.sceneRef, () => sceneFunctions(refs, cameraControls, props));

	const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], []);
	const { mouse, clock } = useThree();

	useFrame((state, delta) => {
		const t = clock.getElapsedTime();
		const ref = refs.groupRef.current as any;

		ref.rotation.z = (1 + Math.sin(t / 0.5)) / 90;
		ref.position.y = (1 + Math.sin(t / 0.6)) / 0.75;

		rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 7.5, 0);
		ref.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.05);
	});

	return (
		<>
			{/* <CameraControls ref={cameraControls} position={[0, 0, 130]} target={[0, 40, 0]} /> */}
			<PerspectiveCamera ref={refCam} makeDefault position={[0, 40, 145]} fov={40} />
			<spotLight intensity={0.05} angle={0.15} penumbra={1} position={[300, 300, 300]} castShadow />
			<ambientLight intensity={3} />

			<Selection>
				<EffectComposer autoClear={false}>
					<Outline blur edgeStrength={10} visibleEdgeColor={0xffffff} />
					<Bloom mipmapBlur luminanceThreshold={1} />
				</EffectComposer>

				<group position={[0, 40, 0]}>
					<ModelSkate refs={refs} {...props} />
				</group>
			</Selection>

			<ContactShadows
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0.25, -2.5, -0.5]}
				opacity={1}
				width={10}
				height={10}
				blur={1.5}
				far={6}
			/>
		</>
	);
});

const Scene: FC<ModelMetadataProps & { sceneRef: sceneRefType }> = React.memo((props) => {
	return (
		<LoaderScene>
			<Suspense>
				<SkateScene {...props} />
			</Suspense>
		</LoaderScene>
	);
});

export { Scene };
