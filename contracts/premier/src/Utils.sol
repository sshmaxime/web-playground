// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";

/**
 * @dev A struct representing the status of an Item.
 */
enum ItemStatus {
    DEFAULT,
    MUTATED
}

/**
 * @dev Struct representing the mutation of an Item.
 */
struct ItemMutation {
    IERC721 tokenContract;
    uint256 tokenId;
}

/**
 * @dev Struct representing an Item.
 */
struct Item {
    uint256 id;
    uint8 version;
    ItemStatus status;
    ItemMutation mutation;
}

/**
 * @dev Data structure representing a Drop data.
 */
struct DropData {
    /**
     * Identification.
     */
    uint256 id;
    string symbol;
    string name;
    /**
     * Drop.
     */
    uint256 currentSupply;
    uint256 maxSupply;
    uint256 price;
    uint8 versions;
    /**
     * Metadata.
     */
    string contractURI;
    string dropURI;
    string baseURI;
}

/**
 * @dev Data structure representing an Item data.
 */
struct ItemData {
    address owner;
    Item item;
}
