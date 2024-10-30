import { promises as fs } from "node:fs";
import path from "node:path";
import type { Config } from "../src/types";

const DROP_DIR = path.join(__dirname, "..", "resources", "drop");
const CONFIG_FILE = "config.json";

export const loadConfig = async (dropId: number) => {
	const dropDir = path.join(DROP_DIR, dropId.toString());

	/**
	 * @dev Load drop configuration.
	 */
	const dropConfigFile = path.join(dropDir, CONFIG_FILE);
	const dropConfig = JSON.parse(await fs.readFile(dropConfigFile, "utf-8")) as Config;

	if (dropId !== dropConfig.id) throw Error("Invalid drop version");

	return dropConfig;
};
