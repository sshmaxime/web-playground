/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@web-playground/ui"],
	reactStrictMode: true,

	/**
	 * @dev https://docs.reown.com/appkit/next/core/installation#extra-configuration
	 */
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		return config;
	},
};

export default nextConfig;
