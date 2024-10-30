import { createConfig } from "@wagmi/core";

import { ChainConfigsArray, ChainTransport } from "@configs/schemas/chains";

/**
 * @dev TODO add types.
 */
const config = createConfig({
	chains: ChainConfigsArray,
	transports: ChainTransport,
});

export { config };
