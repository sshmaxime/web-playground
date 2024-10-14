// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.28;

import {Script, console} from "forge-std/Script.sol";
import {Store} from "../src/Store.sol";

contract StoreScript is Script {
    Store public store;

    /**
     * Utils.
     */

    /**
     * @dev
     */
    function env_contractSalt() private view returns (bytes32) {
        string memory contractSalt = vm.envString("STORE_CONTRACT_SALT");
        return bytes32(bytes(contractSalt));
    }

    /**
     * Core.
     */

    /**
     * @dev
     */
    function run() public {
        vm.startBroadcast();

        // Load variables.
        bytes32 contractSalt = env_contractSalt();

        // Deploy contract.
        store = new Store{salt: contractSalt}(msg.sender);

        console.log(address(store));

        vm.stopBroadcast();
    }
}
