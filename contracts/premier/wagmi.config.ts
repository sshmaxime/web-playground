import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";
import { actions } from "@wagmi/cli/plugins";
import { react } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "dist/wagmi.ts",
	plugins: [
		hardhat({
			project: ".",
			deployments: { Store: "0x0ef8afF0Cf6c0a48E7e50b4dA888D05D2087404c" },
		}),
		actions(),
		react(),
	],
});
