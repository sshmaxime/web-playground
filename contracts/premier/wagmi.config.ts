import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";
import { actions } from "@wagmi/cli/plugins";
import { react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "src/wagmi.ts",
	plugins: [
		hardhat({ project: ".", deployments: { Store: "0x229a6c90721AB98E69836a245B03a90547Ae086F" } }),
		actions(),
		react(),
	],
});
