/**
 * @dev
 */
enum ENV_KEY {
	ALCHEMY_API_KEY = "ALCHEMY_API_KEY",
}

/**
 * @dev
 */
const ServerEnv = Object.fromEntries(
	Object.values(ENV_KEY).map((key) => [key, process.env[key]]),
) as { [key in ENV_KEY]: string };

export { ServerEnv };
