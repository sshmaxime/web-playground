const IPFS_GATEWAY = "http://127.0.0.1:8080" + "/ipfs/";
const IPFS_EXP = "ipfs://";

/**
 * @dev
 */
const ipfsUrl = (URI: string) => URI.replace(IPFS_EXP, IPFS_GATEWAY);

export { ipfsUrl };
