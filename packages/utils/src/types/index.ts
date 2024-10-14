/**
 * @dev
 */
type NonUndefinedObject<T> = {
	[K in keyof T]-?: Exclude<T[K], undefined>;
};

/**
 * @dev
 */
type NonEmptyArray<T> = [T, ...T[]];

export type { NonUndefinedObject, NonEmptyArray };
