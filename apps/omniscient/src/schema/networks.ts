import { z } from "zod";

/**
 * Networks.
 *
 * @dev List of all the networks schemas and types.
 */
const zNetworks = z.enum(["Omni", "Ethereum", "Optimism", "Base", "Arbitrum"]);
type Network = z.infer<typeof zNetworks>;

export { zNetworks, type Network };
