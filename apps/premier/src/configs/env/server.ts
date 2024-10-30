/**
 * @dev
 */
enum ENV_KEY {
	ALCHEMY_API_KEY = "ALCHEMY_API_KEY",
	NODE_ENV = "NODE_ENV",
	VERCEL_ENV = "VERCEL_ENV",

	NEXT_PUBLIC_LOL = "NEXT_PUBLIC_LOL",
}

/**
 * @dev
 */
const ServerEnv = Object.fromEntries(
	Object.values(ENV_KEY).map((key) => [key, process.env[key]]),
) as { [key in ENV_KEY]: string };

export { ServerEnv };
