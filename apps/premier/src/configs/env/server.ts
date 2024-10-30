type ServerEnv = {
	VERCEL_ENV: "production" | "preview" | "development";
	ALCHEMY_API_KEY: string;
};

/**
 * @dev
 */
const ServerEnv = {
	VERCEL_ENV: process.env.VERCEL_ENV ?? "development",
	ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
} as ServerEnv;

// biome-ignore lint/style/useExportType: <explanation>
export { ServerEnv };
