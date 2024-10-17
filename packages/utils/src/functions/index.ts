import type { Types } from "..";

/**
 * @dev
 */
const nonEmptyArray = <T>(arr: T[]): Types.NonEmptyArray<T> => {
	if (arr.length <= 0) throw new Error("");
	return arr as Types.NonEmptyArray<T>;
};

export { nonEmptyArray };
