import { ServerEnv } from "@configs/env/server";
import { Alchemy, type AlchemySettings, type Network } from "alchemy-sdk";

const baseSettings: AlchemySettings = {
	apiKey: ServerEnv.ALCHEMY_API_KEY,
};

const alchemySdk = (network: Network) => new Alchemy({ ...baseSettings, network });

export { alchemySdk };
