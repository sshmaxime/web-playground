import type { DropMetadata } from "@web-playground/contracts-premier/types.ts";
import { z } from "zod";

/**
 * @dev
 */
const zDrop = z.object({
	id: z.bigint(),
	symbol: z.string(),
	name: z.string(),
	currentSupply: z.bigint(),
	maxSupply: z.bigint(),
	price: z.bigint(),
	versions: z.number(),
	contractURI: z.string(),
	dropURI: z.string(),
	baseURI: z.string(),
});

type Drop = z.infer<typeof zDrop> & {
	metadata: DropMetadata;
};

export type { Drop, DropMetadata };
