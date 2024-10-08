/**
 * @dev
 */
enum ENV_KEY {}

/**
 * @dev
 */
const ClientEnv = Object.fromEntries(
	Object.values(ENV_KEY).map((key) => [key, process.env[key]]),
) as { [key in ENV_KEY]: string };

export { ClientEnv };
