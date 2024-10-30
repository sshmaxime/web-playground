/**
 * @dev
 */
type Config = {
	id: number;
	name: string;

	maxSupply: number;
	price: string;
	versions: number;

	metadata: {
		id: number;
		model: { filePath: string };
		informations: [{ title: string; filePath: string }];
		versions: [{ id: number; color: string; name: string; filePath: string }];
	};
};

/**
 * @dev
 */
type DropMetadata = {
	id: number;
	model: string;
	versions: { id: number; name: string; color: string; texture: string }[];
	informations: { title: string; html: string }[];
};

export type { DropMetadata, Config };
