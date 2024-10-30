/**
 * @dev
 */
enum ENV_KEY {
	NODE_ENV = "NODE_ENV",
}

/**
 * @dev
 */
const ClientEnv = Object.fromEntries(
	Object.values(ENV_KEY).map((key) => [key, process.env[key]]),
) as { [key in ENV_KEY]: string };

export { ClientEnv };
