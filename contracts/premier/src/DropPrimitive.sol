// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IERC721Enumerable} from "@openzeppelin/contracts/interfaces/IERC721Enumerable.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ERC721Votes} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";

import {Item, ItemStatus, ItemMutation} from "./Utils.sol";

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

/**
 * @author @sshmaxime.
 *
 * @title DropPrimitive.
 */
abstract contract DropPrimitive is ERC721Enumerable, Ownable {
    /**
     * Immutables.
     */
    uint256 internal immutable DROP_ID;
    uint256 internal immutable MAX_SUPPLY;
    uint256 internal immutable PRICE;
    uint8 internal immutable VERSIONS;

    /**
     * Metadata.
     */
    string internal CONTRACT_URI = "";
    string internal DROP_URI = "";
    string internal BASE_URI = "";

    /**
     * Errors.
     */
    error InvalidMaxSupply();
    error InvalidVersions();

    constructor(uint256 id, uint256 _maxSupply, uint256 _price, uint8 _versions) {
        DROP_ID = id;
        MAX_SUPPLY = _maxSupply;
        PRICE = _price;
        VERSIONS = _versions;

        // Drop should have at least one Item.
        if (_maxSupply == 0) revert InvalidMaxSupply();

        // Drop should have at least one version.
        if (_versions == 0) revert InvalidVersions();
    }

    /**
     * @dev Returns the Drop's id.
     */
    function dropId() public view returns (uint256) {
        return DROP_ID;
    }

    /**
     * @dev Returns the Drop's maximum supply.
     */
    function maxSupply() public view returns (uint256) {
        return MAX_SUPPLY;
    }

    /**
     * @dev Returns the Drop's items mint price.
     */
    function price() public view returns (uint256) {
        return PRICE;
    }

    /**
     * @dev Returns the Drop's number of version.
     */
    function versions() public view returns (uint8) {
        return VERSIONS;
    }

    /**
     * Contract URI.
     */

    /**
     * @dev Returns the contract's URI.
     */
    function contractURI() public view returns (string memory) {
        return CONTRACT_URI;
    }

    /**
     * @dev Set the contract's URI.
     */
    function setContractURI(string memory newURI) public onlyOwner {
        CONTRACT_URI = newURI;
    }

    /**
     * Drop URI.
     */

    /**
     * @dev Returns the Drop's URI.
     */
    function dropURI() public view returns (string memory) {
        return DROP_URI;
    }

    /**
     * @dev Set the Drop's URI.
     */
    function setDropURI(string memory newURI) public onlyOwner {
        DROP_URI = newURI;
    }

    /**
     * Drop baseURI.
     */

    /**
     * @dev Returns the Drop's baseURI.
     */
    function baseURI() public view returns (string memory) {
        return BASE_URI;
    }

    /**
     * @dev Returns the Drop's baseURI.
     */
    function _baseURI() internal view override returns (string memory) {
        return baseURI();
    }

    /**
     * @dev Set the Drop's baseURI.
     */
    function setBaseURI(string memory newURI) public onlyOwner {
        BASE_URI = newURI;
    }
}
