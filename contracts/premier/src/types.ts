/**
 * @dev
 */
type DropMetadata = {
	id: number;
	model: string;
	versions: { id: number; texture: string; color: string; name: string }[];
};

export type { DropMetadata };
