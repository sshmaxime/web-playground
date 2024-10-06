/**
 * @dev
 */
const shortenAddress = (address: string | undefined) => {
	return `${address?.substring(0, 6)}...${address?.substring(address.length - 4, address.length)}`;
};

/**
 * @dev
 */
const roundedEther = (ether: string | undefined) => {
	return ether?.substring(0, 6);
};

export { shortenAddress, roundedEther };
