// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console, stdError} from "forge-std/Test.sol";

import {Store, Drop, DropData, ItemData} from "../src/Store.sol";

contract StoreTest is Test {
    Store public store;

    function setUp() public {
        store = new Store(msg.sender);
    }

    /**
     * Initial.
     */
    function test_InitialOwnership() public view {
        assertEq(store.owner(), msg.sender);
    }

    function test_InitialState() public view {
        assertEq(store.dropSupply(), 0);
    }
}
