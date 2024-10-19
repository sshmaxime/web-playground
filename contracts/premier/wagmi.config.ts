import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";
import { actions } from "@wagmi/cli/plugins";
import { react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "src/wagmi.ts",
	plugins: [
		hardhat({ project: ".", deployments: { Store: "0xa80e81F9FE7CbFd66E62c50e720c2505775a7393" } }),
		actions(),
		react(),
	],
});
