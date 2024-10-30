type ClientEnv = {
	VERCEL_ENV: "production" | "preview" | "development";
};

/**
 * @dev
 */
const ClientEnv = {
	VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",
} as ClientEnv;

export { ClientEnv };
