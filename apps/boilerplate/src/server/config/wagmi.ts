import { http, createConfig } from "@wagmi/core";

import { ChainConfigs } from "@configs/schemas/chains";
import { RPCS } from "@server/config/rpcs";

/**
 * @dev
 */
const config = createConfig({
	chains: [ChainConfigs.Anvil],
	transports: {
		[ChainConfigs.Anvil.id]: http(RPCS.Anvil),
	},
});

export { config };
