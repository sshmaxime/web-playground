/**
 * @dev
 */
type NonUndefinedObject<T> = {
	[K in keyof T]-?: Exclude<T[K], undefined>;
};

export type { NonUndefinedObject };
