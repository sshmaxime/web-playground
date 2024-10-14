import type { Types } from "..";

/**
 * @dev
 */
const toNonEmptyArray = <T>(arr: T[]): Types.NonEmptyArray<T> => {
	if (arr.length <= 0) throw new Error("");
	return arr as Types.NonEmptyArray<T>;
};

export { toNonEmptyArray };
