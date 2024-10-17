// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import {Drop, DropData, ItemData} from "./Drop.sol";

/**
 * @author @sshmaxime.
 *
 * @title Store.
 */
contract Store is ReentrancyGuard, Ownable {
    /**
     * Internals.
     */

    // Total supply of Drops.
    uint256 internal DROP_SUPPLY = 0;

    /**
     * Mappings.
     */

    // Mapping from drop id to drop.
    mapping(uint256 => Drop) private drops;

    /**
     * Events.
     */

    // Event triggered when a Drop is created.
    event DropCreated(uint256 indexed dropId);

    // Event triggered when an Item is minted.
    event Minted(uint256 indexed dropId, uint256 indexed itemId);

    // Event triggered when an Item is mutated.
    event Mutated(uint256 indexed dropId, uint256 indexed itemId);

    // Event triggered when funds are withdrawn.
    event Withdrawn(uint256 indexed dropId, uint256 fundsWithdrawn);

    /**
     * Errors.
     */
    error InvalidDropId();

    /**
     * Modifiers.
     */
    modifier validDropId(uint256 dropId) {
        require(dropId < dropSupply(), InvalidDropId());
        _;
    }

    /**
     * Constructor.
     */
    constructor() Ownable(tx.origin) {}

    /**
     * Factory.
     */

    /**
     * @dev Create a Drop.
     */
    function createDrop(
        uint256 maxSupply,
        uint256 mintPrice,
        uint8 versions
    ) external onlyOwner {
        uint256 dropId = dropSupply();
        drops[dropId] = new Drop(dropId, maxSupply, mintPrice, versions);

        DROP_SUPPLY++;

        emit DropCreated(dropId);
    }

    /**
     * Core.
     */

    /**
     * @dev Mint an Item.
     */
    function mint(
        uint256 dropId,
        uint8 versionId
    ) external payable nonReentrant {
        uint256 itemId = drop(dropId).mint{value: msg.value}(
            versionId,
            msg.sender
        );

        emit Minted(dropId, itemId);
    }

    /**
     * @dev Mutate an Item.
     */
    function mutate(
        uint256 dropId,
        uint256 itemId,
        IERC721 tokenContract,
        uint256 tokenId
    ) external nonReentrant {
        drop(dropId).mutate(itemId, tokenContract, tokenId, msg.sender);

        emit Mutated(dropId, itemId);
    }

    /**
     * @dev Withdraw funds from Drop.
     */
    function withdraw(uint256 dropId) external onlyOwner {
        uint256 balance = drop(dropId).withdraw(msg.sender);

        emit Withdrawn(dropId, balance);
    }

    /**
     * @dev Returns the Drop associated with the given `dropId`.
     */
    function drop(
        uint256 dropId
    ) public view validDropId(dropId) returns (Drop) {
        return drops[dropId];
    }

    /**
     * Metadata.
     */

    /**
     * @dev Set the contractURI of a Drop.
     */
    function setContractURI(
        uint256 dropId,
        string memory newURI
    ) external onlyOwner {
        drop(dropId).setContractURI(newURI);
    }

    /**
     * @dev Set the dropURI of a Drop.
     */
    function setDropURI(
        uint256 dropId,
        string memory newURI
    ) external onlyOwner {
        drop(dropId).setDropURI(newURI);
    }

    /**
     * @dev Set the baseURI of a Drop.
     */
    function setBaseURI(
        uint256 dropId,
        string memory newURI
    ) external onlyOwner {
        drop(dropId).setBaseURI(newURI);
    }

    /**
     * Utils.
     */

    /**
     * @dev Returns the Drop data associated with the given `dropId`.
     */
    function dropData(uint256 dropId) public view returns (DropData memory) {
        return drop(dropId).dropData();
    }

    /**
     * @dev Returns the Item data associated with the given `dropId` & `itemId`.
     */
    function itemData(
        uint256 dropId,
        uint256 itemId
    ) external view returns (ItemData memory) {
        return drop(dropId).itemData(itemId);
    }

    /**
     * @dev Returns the drop supply.
     */
    function dropSupply() public view returns (uint256) {
        return DROP_SUPPLY;
    }
}
