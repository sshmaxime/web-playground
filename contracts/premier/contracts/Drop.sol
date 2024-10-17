// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ERC721Votes} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";

import {DropPrimitive} from "./DropPrimitive.sol";
import {Item, ItemStatus, ItemMutation, DropData, ItemData} from "./Utils.sol";

/**
 * @author @sshmaxime.
 *
 * @title Drop.
 */
contract Drop is DropPrimitive, ReentrancyGuard {
    /**
     * Constants.
     */
    string internal constant NAME_PREFIX = "DROP#";
    string internal constant SYMBOL_PREFIX = "DROP#";

    /**
     * Mappings
     */

    // Mapping from item id to Item
    mapping(uint256 => Item) private itemIdToItem;

    /**
     * Errors
     */
    error AlreadyMutated();
    error InvalidVersionId();
    error InvalidItemId();
    error InvalidPrice();
    error InvalidItemOwner();
    error InvalidTokenOwner();
    error MaxSupplyReached();

    constructor(
        uint256 id,
        uint256 maxSupply,
        uint256 price,
        uint8 versions
    )
        DropPrimitive(id, maxSupply, price, versions)
        ERC721(
            string.concat(NAME_PREFIX, Strings.toString(id)),
            string.concat(SYMBOL_PREFIX, Strings.toString(id))
        )
        Ownable(msg.sender)
    {}

    /**
     * Core.
     */

    /**
     * @dev Mint a Item.
     */
    function mint(
        uint8 versionId,
        address caller
    ) external payable onlyOwner returns (uint256 itemId) {
        itemId = totalSupply();

        // Item id to be minted needs to be below the max supply limit.
        if (itemId >= MAX_SUPPLY) revert MaxSupplyReached();

        // Caller needs to mint a valid Item version.
        if (versionId >= VERSIONS) revert InvalidVersionId();

        // Caller needs to provide a valid price.
        if (msg.value != PRICE) revert InvalidPrice();

        _safeMint(caller, itemId);
        itemIdToItem[itemId] = Item({
            id: itemId,
            version: versionId,
            status: ItemStatus.DEFAULT,
            mutation: ItemMutation({
                tokenContract: IERC721(address(0)),
                tokenId: 0
            })
        });
    }

    /**
     * @dev Mutate a Item.
     */
    function mutate(
        uint256 itemId,
        IERC721 tokenContract,
        uint256 tokenId,
        address caller
    ) external onlyOwner {
        Item storage _item = itemIdToItem[itemId];

        // Caller should own the Item.
        if (_ownerOf(itemId) != caller) revert InvalidItemOwner();
        require(_ownerOf(itemId) != caller, InvalidItemOwner());

        // Item status should be Default.
        if (_item.status != ItemStatus.DEFAULT) revert AlreadyMutated();

        // Owner of tokenId should be the caller.
        if (tokenContract.ownerOf(tokenId) != caller)
            revert InvalidTokenOwner();

        _item.status = ItemStatus.MUTATED;
        _item.mutation.tokenContract = tokenContract;
        _item.mutation.tokenId = tokenId;
    }

    /**
     * @dev Withdraw funds.
     */
    function withdraw(address to) external onlyOwner returns (uint256 balance) {
        balance = address(this).balance;
        payable(to).transfer(balance);
    }

    /**
     * @dev Returns the Drop.
     */
    function dropData() public view returns (DropData memory) {
        return
            DropData({
                symbol: symbol(),
                name: name(),
                id: dropId(),
                maxSupply: maxSupply(),
                versions: versions(),
                price: price(),
                currentSupply: totalSupply(),
                contractURI: contractURI(),
                dropURI: dropURI(),
                baseURI: baseURI()
            });
    }

    /**
     * @dev Returns the Item associated with the given `itemId`.
     */
    function itemData(uint256 itemId) external view returns (ItemData memory) {
        Item memory item = itemIdToItem[itemId];

        if (itemId >= totalSupply()) revert InvalidItemId();

        return ItemData({owner: this.ownerOf(itemId), item: item});
    }
}
