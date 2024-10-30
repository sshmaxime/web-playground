import { Bounds, Center, useBounds, useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { debounce } from "lodash";
import React, { type PropsWithChildren, useCallback, useState, type FC, useEffect } from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

import type { ThreeEvent } from "@react-three/fiber";
import {
	generatesCanvasTexture,
	loadTextureTextToObject,
	loadTextureToObject,
	useTextures,
} from "../utils/loaderTexture";

type GLTFResult = GLTF & {
	nodes: {
		Tube: THREE.Mesh;
		Tube2_4: THREE.Mesh;
		Tube2_5: THREE.Mesh;
		Tube_1: THREE.Mesh;
		Tube2_1_1: THREE.Mesh;
		Tube2_1_2: THREE.Mesh;
		Tube_2: THREE.Mesh;
		Tube2_2_1: THREE.Mesh;
		Tube2_2_2: THREE.Mesh;
		Tube_3: THREE.Mesh;
		Tube2_3_1: THREE.Mesh;
		Tube2_3_2: THREE.Mesh;
		Absorber1: THREE.Mesh;
		Trucks: THREE.Mesh;
		Deck: THREE.Mesh;
		Placeholder: THREE.Mesh;
	};
	materials: {
		Wheels: THREE.MeshStandardMaterial;
		Trucks: THREE.MeshStandardMaterial;
		Deck: THREE.MeshStandardMaterial;
		Placeholder: THREE.MeshStandardMaterial;
	};
};

export type SkateRefs = ReturnType<typeof useSkateRefsLoader>;
export const useSkateRefsLoader = () => {
	return {
		groupRef: React.useRef<THREE.Group>(null),
		deckRef: React.useRef<THREE.Mesh>(null),
		placeholderRef: React.useRef<THREE.Mesh>(null),
		textRef: React.useRef<THREE.MeshBasicMaterial>(null),
	};
};

export const defaultSkateModelAnimation = (refs: SkateRefs, props: ModelMetadataProps) => ({
	_changeTextureDeck(imgPath: string) {
		loadTextureToObject(imgPath, refs.deckRef);
	},
	_changeTexturePlaceholder(imgPath: string) {
		loadTextureToObject(imgPath, refs.placeholderRef);
	},
	_changeTextureText(dripId: number, dropId: number, totalSupply: number) {
		loadTextureTextToObject(dripId, dropId, totalSupply, refs.textRef);
	},
	//
	updateVersion(version: number) {
		this._changeTextureDeck(props.versions[version].texture);
	},
	updateItem(imgPath: string) {
		this._changeTexturePlaceholder(imgPath);
	},
});

export type ModelMetadataProps = {
	// model
	model: string;
	// deck
	initialVersion: number;
	versions: { name: string; texture: string }[];
	// placeholder
	initialPlaceholderTexture?: string;
	// text
	initialDripId: number;
	initialDropId: number;
	initialMaxSupply: number;

	/**
	 * @dev Three.
	 */
	three?: {
		group?: JSX.IntrinsicElements["group"];
		deck?: JSX.IntrinsicElements["mesh"];
		placeholder?: JSX.IntrinsicElements["mesh"];
	};

	/**
	 * @dev Actions.
	 */
	actions?: {
		onSelected: () => void;
	};
};

export type ModelProps = ModelMetadataProps & { refs: SkateRefs };

const Skate: FC<ModelProps> = React.memo(
	(props) => {
		// model
		const { nodes, materials } = useGLTF(props.model) as GLTFResult;
		// Deck
		materials.Deck.color = new THREE.Color(0xffffff);
		materials.Deck.toneMapped = false;
		//
		// // Placeholder
		materials.Placeholder.color = new THREE.Color(0xffffff);
		materials.Placeholder.toneMapped = false;

		// setup refs
		const group = props.refs.groupRef;
		const deckRef = props.refs.deckRef;
		const placeholderRef = props.refs.placeholderRef;
		const textRef = props.refs.textRef;

		// // metadata
		// const versionName = props.versions[props.initialVersion].name;
		const dripId = props.initialDripId;
		const dropId = props.initialDropId;
		const totalSupply = props.initialMaxSupply;

		const textTexture = generatesCanvasTexture(dripId, dropId, totalSupply);

		// preload texture
		const texturesToLoad: string[] = [];
		for (let i = 0; i < props.versions.length; i++) texturesToLoad.push(props.versions[i].texture);

		// if placeholder texture
		if (props.initialPlaceholderTexture) texturesToLoad.push(props.initialPlaceholderTexture);

		const textures = useTextures(texturesToLoad);

		if (props.initialPlaceholderTexture) {
			materials.Placeholder.map = textures[textures.length - 1];
		}

		const deckInitialTexture = textures[props.initialVersion];
		materials.Deck.map = deckInitialTexture;

		const [hovered, hover] = useState(null);
		const debouncedHover = useCallback(debounce(hover, 30), []);

		const over = (name: string) => (e: ThreeEvent<PointerEvent>) => {
			e.stopPropagation();
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			debouncedHover(name as any);
		};

		return (
			<group ref={group} {...props.three?.group}>
				<Bounds fit clip observe margin={1.2}>
					<Center>
						<group rotation={[Math.PI, Math.PI / 2, Math.PI / 2]} dispose={null}>
							<mesh
								ref={deckRef}
								castShadow
								geometry={nodes.Deck.geometry}
								material={materials.Deck}
								rotation={[Math.PI / 2, 0, 0]}
								{...props.three?.deck}
							/>

							<SelectToZoom onSelected={props.actions?.onSelected}>
								<Select
									enabled={hovered === "BRÖNDEN"}
									onPointerOver={over("BRÖNDEN")}
									onPointerOut={() => debouncedHover(null)}
								>
									<mesh
										ref={placeholderRef}
										castShadow
										geometry={nodes.Placeholder.geometry}
										material={materials.Placeholder}
										rotation={[Math.PI / 2, 0, 0]}
										{...props.three?.placeholder}
									/>
								</Select>
							</SelectToZoom>

							<mesh position={[31.5, 7.7, 0]} rotation={[Math.PI / 2, 0.25, -Math.PI / -2]}>
								<planeGeometry args={[10, 10, 10, 10]} />
								<meshBasicMaterial ref={textRef} transparent map={textTexture} />
							</mesh>
						</group>
					</Center>
				</Bounds>
			</group>
		);
	},
	() => {
		return true;
	},
);

type Props = { onSelected?: () => void } & PropsWithChildren;
function SelectToZoom({ children, onSelected }: Props) {
	const api = useBounds();
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		selected && onSelected?.();
	}, [selected, onSelected]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<group
			onClick={(e: ThreeEvent<MouseEvent>) => {
				e.stopPropagation();
				api.refresh(e.object).fit();
				setSelected(true);
			}}
			onPointerMissed={(e: MouseEvent) => {
				e.button === 0 && api.refresh().fit();
				setSelected(false);
			}}
		>
			{children}
		</group>
	);
}

export default Skate;
