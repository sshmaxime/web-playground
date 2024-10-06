import type { Types } from "@web-playground/utils";

/**
 * @dev
 */
type MakeChainObjectReadable<T> = Types.NonUndefinedObject<{
	[K in keyof T]: T[K] extends bigint
		? string
		: T[K] extends bigint | undefined
			? string | undefined
			: T[K] extends object
				? MakeChainObjectReadable<T[K]>
				: T[K];
}>;

export type { MakeChainObjectReadable };
