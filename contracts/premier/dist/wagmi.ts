import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checkpoints
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const checkpointsAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Drop
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dropAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'versions', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyMutated' },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  { type: 'error', inputs: [], name: 'InvalidItemId' },
  { type: 'error', inputs: [], name: 'InvalidItemOwner' },
  { type: 'error', inputs: [], name: 'InvalidMaxSupply' },
  { type: 'error', inputs: [], name: 'InvalidPrice' },
  { type: 'error', inputs: [], name: 'InvalidTokenOwner' },
  { type: 'error', inputs: [], name: 'InvalidVersionId' },
  { type: 'error', inputs: [], name: 'InvalidVersions' },
  { type: 'error', inputs: [], name: 'MaxSupplyReached' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropData',
    outputs: [
      {
        name: '',
        internalType: 'struct DropData',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'currentSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'versions', internalType: 'uint8', type: 'uint8' },
          { name: 'contractURI', internalType: 'string', type: 'string' },
          { name: 'dropURI', internalType: 'string', type: 'string' },
          { name: 'baseURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'itemData',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemData',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'item',
            internalType: 'struct Item',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              { name: 'version', internalType: 'uint8', type: 'uint8' },
              {
                name: 'status',
                internalType: 'enum ItemStatus',
                type: 'uint8',
              },
              {
                name: 'mutation',
                internalType: 'struct ItemMutation',
                type: 'tuple',
                components: [
                  {
                    name: 'tokenContract',
                    internalType: 'contract IERC721',
                    type: 'address',
                  },
                  { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'versionId', internalType: 'uint8', type: 'uint8' },
      { name: 'caller', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ name: 'itemId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'tokenContract',
        internalType: 'contract IERC721',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'caller', internalType: 'address', type: 'address' },
    ],
    name: 'mutate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setDropURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'versions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'withdraw',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DropPrimitive
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dropPrimitiveAbi = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  { type: 'error', inputs: [], name: 'InvalidMaxSupply' },
  { type: 'error', inputs: [], name: 'InvalidVersions' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newURI', internalType: 'string', type: 'string' }],
    name: 'setDropURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'versions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableAbi = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721VotesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5805
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5805Abi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6372
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6372Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotesAbi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nonces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noncesAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShortStrings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const shortStringsAbi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Store
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storeAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'InvalidDropId' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dropId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'DropCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dropId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dropId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Mutated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dropId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'fundsWithdrawn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawn',
  },
  {
    type: 'function',
    inputs: [
      { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'mintPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'versions', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createDrop',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dropId', internalType: 'uint256', type: 'uint256' }],
    name: 'drop',
    outputs: [{ name: '', internalType: 'contract Drop', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'dropId', internalType: 'uint256', type: 'uint256' }],
    name: 'dropData',
    outputs: [
      {
        name: '',
        internalType: 'struct DropData',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'currentSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'versions', internalType: 'uint8', type: 'uint8' },
          { name: 'contractURI', internalType: 'string', type: 'string' },
          { name: 'dropURI', internalType: 'string', type: 'string' },
          { name: 'baseURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dropSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'itemData',
    outputs: [
      {
        name: '',
        internalType: 'struct ItemData',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'item',
            internalType: 'struct Item',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              { name: 'version', internalType: 'uint8', type: 'uint8' },
              {
                name: 'status',
                internalType: 'enum ItemStatus',
                type: 'uint8',
              },
              {
                name: 'mutation',
                internalType: 'struct ItemMutation',
                type: 'tuple',
                components: [
                  {
                    name: 'tokenContract',
                    internalType: 'contract IERC721',
                    type: 'address',
                  },
                  { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'versionId', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'tokenContract',
        internalType: 'contract IERC721',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mutate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'newURI', internalType: 'string', type: 'string' },
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'newURI', internalType: 'string', type: 'string' },
    ],
    name: 'setContractURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dropId', internalType: 'uint256', type: 'uint256' },
      { name: 'newURI', internalType: 'string', type: 'string' },
    ],
    name: 'setDropURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dropId', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const storeAddress =
  '0x0ef8afF0Cf6c0a48E7e50b4dA888D05D2087404c' as const

export const storeConfig = { address: storeAddress, abi: storeAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__
 */
export const readDrop = /*#__PURE__*/ createReadContract({ abi: dropAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readDropBalanceOf = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"baseURI"`
 */
export const readDropBaseUri = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"contractURI"`
 */
export const readDropContractUri = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropData"`
 */
export const readDropDropData = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'dropData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropId"`
 */
export const readDropDropId = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'dropId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropURI"`
 */
export const readDropDropUri = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'dropURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"getApproved"`
 */
export const readDropGetApproved = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readDropIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"itemData"`
 */
export const readDropItemData = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'itemData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"maxSupply"`
 */
export const readDropMaxSupply = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'maxSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"name"`
 */
export const readDropName = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"owner"`
 */
export const readDropOwner = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readDropOwnerOf = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"price"`
 */
export const readDropPrice = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'price',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readDropSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"symbol"`
 */
export const readDropSymbol = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const readDropTokenByIndex = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const readDropTokenOfOwnerByIndex = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'tokenOfOwnerByIndex',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readDropTokenUri = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readDropTotalSupply = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"versions"`
 */
export const readDropVersions = /*#__PURE__*/ createReadContract({
  abi: dropAbi,
  functionName: 'versions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__
 */
export const writeDrop = /*#__PURE__*/ createWriteContract({ abi: dropAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"approve"`
 */
export const writeDropApprove = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mint"`
 */
export const writeDropMint = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mutate"`
 */
export const writeDropMutate = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'mutate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeDropRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeDropSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeDropSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const writeDropSetBaseUri = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setContractURI"`
 */
export const writeDropSetContractUri = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'setContractURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setDropURI"`
 */
export const writeDropSetDropUri = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeDropTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeDropTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeDropWithdraw = /*#__PURE__*/ createWriteContract({
  abi: dropAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__
 */
export const simulateDrop = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"approve"`
 */
export const simulateDropApprove = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mint"`
 */
export const simulateDropMint = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mutate"`
 */
export const simulateDropMutate = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'mutate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateDropRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dropAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateDropSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: dropAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateDropSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: dropAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const simulateDropSetBaseUri = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setContractURI"`
 */
export const simulateDropSetContractUri = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'setContractURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setDropURI"`
 */
export const simulateDropSetDropUri = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateDropTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateDropTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dropAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateDropWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: dropAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropAbi}__
 */
export const watchDropEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dropAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"Approval"`
 */
export const watchDropApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dropAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchDropApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchDropOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchDropTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dropAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const readDropPrimitive = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readDropPrimitiveBalanceOf = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"baseURI"`
 */
export const readDropPrimitiveBaseUri = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"contractURI"`
 */
export const readDropPrimitiveContractUri = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"dropId"`
 */
export const readDropPrimitiveDropId = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'dropId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"dropURI"`
 */
export const readDropPrimitiveDropUri = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'dropURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"getApproved"`
 */
export const readDropPrimitiveGetApproved = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readDropPrimitiveIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"maxSupply"`
 */
export const readDropPrimitiveMaxSupply = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'maxSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"name"`
 */
export const readDropPrimitiveName = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"owner"`
 */
export const readDropPrimitiveOwner = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readDropPrimitiveOwnerOf = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"price"`
 */
export const readDropPrimitivePrice = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'price',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readDropPrimitiveSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"symbol"`
 */
export const readDropPrimitiveSymbol = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const readDropPrimitiveTokenByIndex = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const readDropPrimitiveTokenOfOwnerByIndex =
  /*#__PURE__*/ createReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readDropPrimitiveTokenUri = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readDropPrimitiveTotalSupply = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"versions"`
 */
export const readDropPrimitiveVersions = /*#__PURE__*/ createReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'versions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const writeDropPrimitive = /*#__PURE__*/ createWriteContract({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"approve"`
 */
export const writeDropPrimitiveApprove = /*#__PURE__*/ createWriteContract({
  abi: dropPrimitiveAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeDropPrimitiveRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeDropPrimitiveSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeDropPrimitiveSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const writeDropPrimitiveSetBaseUri = /*#__PURE__*/ createWriteContract({
  abi: dropPrimitiveAbi,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setContractURI"`
 */
export const writeDropPrimitiveSetContractUri =
  /*#__PURE__*/ createWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setDropURI"`
 */
export const writeDropPrimitiveSetDropUri = /*#__PURE__*/ createWriteContract({
  abi: dropPrimitiveAbi,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeDropPrimitiveTransferFrom = /*#__PURE__*/ createWriteContract(
  { abi: dropPrimitiveAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeDropPrimitiveTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const simulateDropPrimitive = /*#__PURE__*/ createSimulateContract({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"approve"`
 */
export const simulateDropPrimitiveApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateDropPrimitiveRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateDropPrimitiveSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateDropPrimitiveSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const simulateDropPrimitiveSetBaseUri =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setContractURI"`
 */
export const simulateDropPrimitiveSetContractUri =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setDropURI"`
 */
export const simulateDropPrimitiveSetDropUri =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setDropURI',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateDropPrimitiveTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateDropPrimitiveTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const watchDropPrimitiveEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"Approval"`
 */
export const watchDropPrimitiveApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchDropPrimitiveApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchDropPrimitiveOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchDropPrimitiveTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const readEip712 = /*#__PURE__*/ createReadContract({ abi: eip712Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const readEip712Eip712Domain = /*#__PURE__*/ createReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const watchEip712Event = /*#__PURE__*/ createWatchContractEvent({
  abi: eip712Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchEip712Eip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const readErc721 = /*#__PURE__*/ createReadContract({ abi: erc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const readErc721Name = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc721Symbol = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721TokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const writeErc721 = /*#__PURE__*/ createWriteContract({ abi: erc721Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc721Approve = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const simulateErc721 = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const watchErc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const readErc721Enumerable = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721EnumerableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721EnumerableGetApproved = /*#__PURE__*/ createReadContract(
  { abi: erc721EnumerableAbi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"name"`
 */
export const readErc721EnumerableName = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721EnumerableOwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721EnumerableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc721EnumerableSymbol = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const readErc721EnumerableTokenByIndex =
  /*#__PURE__*/ createReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const readErc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721EnumerableTokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc721EnumerableTotalSupply = /*#__PURE__*/ createReadContract(
  { abi: erc721EnumerableAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const writeErc721Enumerable = /*#__PURE__*/ createWriteContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc721EnumerableApprove = /*#__PURE__*/ createWriteContract({
  abi: erc721EnumerableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721EnumerableTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const simulateErc721Enumerable = /*#__PURE__*/ createSimulateContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721EnumerableApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721EnumerableTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const watchErc721EnumerableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721EnumerableApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721EnumerableTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const readErc721Votes = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readErc721VotesClockMode = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721VotesBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"clock"`
 */
export const readErc721VotesClock = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegates"`
 */
export const readErc721VotesDelegates = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readErc721VotesEip712Domain = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721VotesGetApproved = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readErc721VotesGetPastTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: erc721VotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readErc721VotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readErc721VotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721VotesIsApprovedForAll = /*#__PURE__*/ createReadContract(
  { abi: erc721VotesAbi, functionName: 'isApprovedForAll' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"name"`
 */
export const readErc721VotesName = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"nonces"`
 */
export const readErc721VotesNonces = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721VotesOwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721VotesSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc721VotesAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc721VotesSymbol = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721VotesTokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721VotesAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const writeErc721Votes = /*#__PURE__*/ createWriteContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc721VotesApprove = /*#__PURE__*/ createWriteContract({
  abi: erc721VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeErc721VotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: erc721VotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeErc721VotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: erc721VotesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721VotesSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc721VotesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721VotesSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: erc721VotesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721VotesTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721VotesAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const simulateErc721Votes = /*#__PURE__*/ createSimulateContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721VotesApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc721VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateErc721VotesDelegate = /*#__PURE__*/ createSimulateContract(
  { abi: erc721VotesAbi, functionName: 'delegate' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateErc721VotesDelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721VotesSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721VotesSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721VotesTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const watchErc721VotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721VotesApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721VotesApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchErc721VotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchErc721VotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchErc721VotesEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721VotesTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const readIerc5267 = /*#__PURE__*/ createReadContract({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const readIerc5267Eip712Domain = /*#__PURE__*/ createReadContract({
  abi: ierc5267Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const watchIerc5267Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchIerc5267Eip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const readIerc5805 = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readIerc5805ClockMode = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"clock"`
 */
export const readIerc5805Clock = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegates"`
 */
export const readIerc5805Delegates = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readIerc5805GetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastVotes"`
 */
export const readIerc5805GetPastVotes = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getVotes"`
 */
export const readIerc5805GetVotes = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const writeIerc5805 = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const writeIerc5805Delegate = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeIerc5805DelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const simulateIerc5805 = /*#__PURE__*/ createSimulateContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const simulateIerc5805Delegate = /*#__PURE__*/ createSimulateContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateIerc5805DelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const watchIerc5805Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchIerc5805DelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchIerc5805DelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__
 */
export const readIerc6372 = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readIerc6372ClockMode = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"clock"`
 */
export const readIerc6372Clock = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Approval' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Transfer' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const readIerc721Enumerable = /*#__PURE__*/ createReadContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721EnumerableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721EnumerableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721EnumerableGetApproved =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721EnumerableOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721EnumerableAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721EnumerableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const readIerc721EnumerableTokenByIndex =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const readIerc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc721EnumerableTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const writeIerc721Enumerable = /*#__PURE__*/ createWriteContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721EnumerableApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721EnumerableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const simulateIerc721Enumerable = /*#__PURE__*/ createSimulateContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721EnumerableApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const watchIerc721EnumerableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721EnumerableApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721EnumerableTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721MetadataAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const readIVotes = /*#__PURE__*/ createReadContract({ abi: iVotesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegates"`
 */
export const readIVotesDelegates = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readIVotesGetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readIVotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readIVotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const writeIVotes = /*#__PURE__*/ createWriteContract({ abi: iVotesAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeIVotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeIVotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: iVotesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const simulateIVotes = /*#__PURE__*/ createSimulateContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateIVotesDelegate = /*#__PURE__*/ createSimulateContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateIVotesDelegateBySig = /*#__PURE__*/ createSimulateContract(
  { abi: iVotesAbi, functionName: 'delegateBySig' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__
 */
export const watchIVotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchIVotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchIVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link noncesAbi}__
 */
export const readNonces = /*#__PURE__*/ createReadContract({ abi: noncesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link noncesAbi}__ and `functionName` set to `"nonces"`
 */
export const readNoncesNonces = /*#__PURE__*/ createReadContract({
  abi: noncesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__
 */
export const readStore = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"drop"`
 */
export const readStoreDrop = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'drop',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"dropData"`
 */
export const readStoreDropData = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'dropData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"dropSupply"`
 */
export const readStoreDropSupply = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'dropSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"itemData"`
 */
export const readStoreItemData = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'itemData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"owner"`
 */
export const readStoreOwner = /*#__PURE__*/ createReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__
 */
export const writeStore = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"createDrop"`
 */
export const writeStoreCreateDrop = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'createDrop',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mint"`
 */
export const writeStoreMint = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mutate"`
 */
export const writeStoreMutate = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mutate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeStoreRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const writeStoreSetBaseUri = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setContractURI"`
 */
export const writeStoreSetContractUri = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setContractURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setDropURI"`
 */
export const writeStoreSetDropUri = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeStoreTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeStoreWithdraw = /*#__PURE__*/ createWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__
 */
export const simulateStore = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"createDrop"`
 */
export const simulateStoreCreateDrop = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'createDrop',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mint"`
 */
export const simulateStoreMint = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mutate"`
 */
export const simulateStoreMutate = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mutate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateStoreRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const simulateStoreSetBaseUri = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setContractURI"`
 */
export const simulateStoreSetContractUri = /*#__PURE__*/ createSimulateContract(
  { abi: storeAbi, address: storeAddress, functionName: 'setContractURI' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setDropURI"`
 */
export const simulateStoreSetDropUri = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateStoreTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateStoreWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__
 */
export const watchStoreEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"DropCreated"`
 */
export const watchStoreDropCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'DropCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Minted"`
 */
export const watchStoreMintedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: storeAbi,
  address: storeAddress,
  eventName: 'Minted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Mutated"`
 */
export const watchStoreMutatedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: storeAbi,
  address: storeAddress,
  eventName: 'Mutated',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchStoreOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Withdrawn"`
 */
export const watchStoreWithdrawnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: storeAbi,
  address: storeAddress,
  eventName: 'Withdrawn',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__
 */
export const readVotes = /*#__PURE__*/ createReadContract({ abi: votesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readVotesClockMode = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"clock"`
 */
export const readVotesClock = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegates"`
 */
export const readVotesDelegates = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readVotesEip712Domain = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readVotesGetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readVotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readVotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"nonces"`
 */
export const readVotesNonces = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__
 */
export const writeVotes = /*#__PURE__*/ createWriteContract({ abi: votesAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeVotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeVotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__
 */
export const simulateVotes = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateVotesDelegate = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateVotesDelegateBySig = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__
 */
export const watchVotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: votesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchVotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'EIP712DomainChanged',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__
 */
export const useReadDrop = /*#__PURE__*/ createUseReadContract({ abi: dropAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDropBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"baseURI"`
 */
export const useReadDropBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadDropContractUri = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropData"`
 */
export const useReadDropDropData = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'dropData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropId"`
 */
export const useReadDropDropId = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'dropId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"dropURI"`
 */
export const useReadDropDropUri = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'dropURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadDropGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadDropIsApprovedForAll = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"itemData"`
 */
export const useReadDropItemData = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'itemData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"maxSupply"`
 */
export const useReadDropMaxSupply = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'maxSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"name"`
 */
export const useReadDropName = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDropOwner = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadDropOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"price"`
 */
export const useReadDropPrice = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'price',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadDropSupportsInterface = /*#__PURE__*/ createUseReadContract(
  { abi: dropAbi, functionName: 'supportsInterface' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadDropSymbol = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadDropTokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadDropTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dropAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadDropTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadDropTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"versions"`
 */
export const useReadDropVersions = /*#__PURE__*/ createUseReadContract({
  abi: dropAbi,
  functionName: 'versions',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__
 */
export const useWriteDrop = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteDropApprove = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteDropMint = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mutate"`
 */
export const useWriteDropMutate = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'mutate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteDropRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteDropSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteDropSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteDropSetBaseUri = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useWriteDropSetContractUri = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'setContractURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useWriteDropSetDropUri = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDropTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteDropTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteDropWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: dropAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__
 */
export const useSimulateDrop = /*#__PURE__*/ createUseSimulateContract({
  abi: dropAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDropApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: dropAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDropMint = /*#__PURE__*/ createUseSimulateContract({
  abi: dropAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"mutate"`
 */
export const useSimulateDropMutate = /*#__PURE__*/ createUseSimulateContract({
  abi: dropAbi,
  functionName: 'mutate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateDropRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateDropSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateDropSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateDropSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useSimulateDropSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useSimulateDropSetDropUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'setDropURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDropTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateDropTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateDropWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: dropAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropAbi}__
 */
export const useWatchDropEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dropAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDropApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchDropApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchDropOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDropTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const useReadDropPrimitive = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDropPrimitiveBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"baseURI"`
 */
export const useReadDropPrimitiveBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadDropPrimitiveContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"dropId"`
 */
export const useReadDropPrimitiveDropId = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'dropId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"dropURI"`
 */
export const useReadDropPrimitiveDropUri = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'dropURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadDropPrimitiveGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadDropPrimitiveIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"maxSupply"`
 */
export const useReadDropPrimitiveMaxSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'maxSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"name"`
 */
export const useReadDropPrimitiveName = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDropPrimitiveOwner = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadDropPrimitiveOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"price"`
 */
export const useReadDropPrimitivePrice = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'price',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadDropPrimitiveSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadDropPrimitiveSymbol = /*#__PURE__*/ createUseReadContract({
  abi: dropPrimitiveAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadDropPrimitiveTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadDropPrimitiveTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadDropPrimitiveTokenUri = /*#__PURE__*/ createUseReadContract(
  { abi: dropPrimitiveAbi, functionName: 'tokenURI' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadDropPrimitiveTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: dropPrimitiveAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"versions"`
 */
export const useReadDropPrimitiveVersions = /*#__PURE__*/ createUseReadContract(
  { abi: dropPrimitiveAbi, functionName: 'versions' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const useWriteDropPrimitive = /*#__PURE__*/ createUseWriteContract({
  abi: dropPrimitiveAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteDropPrimitiveApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteDropPrimitiveRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteDropPrimitiveSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteDropPrimitiveSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteDropPrimitiveSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useWriteDropPrimitiveSetContractUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useWriteDropPrimitiveSetDropUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'setDropURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDropPrimitiveTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteDropPrimitiveTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const useSimulateDropPrimitive = /*#__PURE__*/ createUseSimulateContract(
  { abi: dropPrimitiveAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDropPrimitiveApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateDropPrimitiveRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateDropPrimitiveSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateDropPrimitiveSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateDropPrimitiveSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useSimulateDropPrimitiveSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useSimulateDropPrimitiveSetDropUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'setDropURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDropPrimitiveTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateDropPrimitiveTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropPrimitiveAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__
 */
export const useWatchDropPrimitiveEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: dropPrimitiveAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDropPrimitiveApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchDropPrimitiveApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchDropPrimitiveOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropPrimitiveAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDropPrimitiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropPrimitiveAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const useReadEip712 = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadEip712Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const useWatchEip712Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchEip712Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useReadErc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc721EnumerableName = /*#__PURE__*/ createUseReadContract({
  abi: erc721EnumerableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721EnumerableSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadErc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721EnumerableTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWriteErc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: erc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useSimulateErc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__
 */
export const useWatchErc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const useReadErc721Votes = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadErc721VotesClockMode = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721VotesBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"clock"`
 */
export const useReadErc721VotesClock = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadErc721VotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadErc721VotesEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721VotesGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadErc721VotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadErc721VotesGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadErc721VotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721VotesIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc721VotesName = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc721VotesNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721VotesOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721VotesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721VotesAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721VotesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721VotesTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721VotesAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const useWriteErc721Votes = /*#__PURE__*/ createUseWriteContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721VotesApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc721VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteErc721VotesDelegate = /*#__PURE__*/ createUseWriteContract(
  { abi: erc721VotesAbi, functionName: 'delegate' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteErc721VotesDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721VotesSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721VotesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721VotesSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721VotesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721VotesTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const useSimulateErc721Votes = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721VotesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721VotesApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateErc721VotesDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateErc721VotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721VotesSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721VotesSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721VotesTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__
 */
export const useWatchErc721VotesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc721VotesAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721VotesApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721VotesApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchErc721VotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchErc721VotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchErc721VotesEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721VotesAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721VotesTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721VotesAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useReadIerc5267 = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadIerc5267Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useWatchIerc5267Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchIerc5267Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useReadIerc5805 = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIerc5805ClockMode = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"clock"`
 */
export const useReadIerc5805Clock = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegates"`
 */
export const useReadIerc5805Delegates = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadIerc5805GetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc5805Abi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadIerc5805GetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getVotes"`
 */
export const useReadIerc5805GetVotes = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useWriteIerc5805 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const useWriteIerc5805Delegate = /*#__PURE__*/ createUseWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteIerc5805DelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useSimulateIerc5805 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateIerc5805Delegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateIerc5805DelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useWatchIerc5805Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchIerc5805DelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchIerc5805DelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__
 */
export const useReadIerc6372 = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIerc6372ClockMode = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"clock"`
 */
export const useReadIerc6372Clock = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useReadIerc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadIerc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadIerc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWriteIerc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useSimulateIerc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWatchIerc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useReadIVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadIVotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadIVotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadIVotesGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadIVotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useWriteIVotes = /*#__PURE__*/ createUseWriteContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteIVotesDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteIVotesDelegateBySig = /*#__PURE__*/ createUseWriteContract(
  { abi: iVotesAbi, functionName: 'delegateBySig' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useSimulateIVotes = /*#__PURE__*/ createUseSimulateContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateIVotesDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotesAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateIVotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useWatchIVotesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchIVotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchIVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__
 */
export const useReadNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadNoncesNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__
 */
export const useReadStore = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"drop"`
 */
export const useReadStoreDrop = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'drop',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"dropData"`
 */
export const useReadStoreDropData = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'dropData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"dropSupply"`
 */
export const useReadStoreDropSupply = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'dropSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"itemData"`
 */
export const useReadStoreItemData = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'itemData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStoreOwner = /*#__PURE__*/ createUseReadContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__
 */
export const useWriteStore = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"createDrop"`
 */
export const useWriteStoreCreateDrop = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'createDrop',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteStoreMint = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mutate"`
 */
export const useWriteStoreMutate = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mutate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStoreRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteStoreSetBaseUri = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useWriteStoreSetContractUri = /*#__PURE__*/ createUseWriteContract(
  { abi: storeAbi, address: storeAddress, functionName: 'setContractURI' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useWriteStoreSetDropUri = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'setDropURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStoreTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteStoreWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__
 */
export const useSimulateStore = /*#__PURE__*/ createUseSimulateContract({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"createDrop"`
 */
export const useSimulateStoreCreateDrop =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'createDrop',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateStoreMint = /*#__PURE__*/ createUseSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"mutate"`
 */
export const useSimulateStoreMutate = /*#__PURE__*/ createUseSimulateContract({
  abi: storeAbi,
  address: storeAddress,
  functionName: 'mutate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStoreRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateStoreSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setContractURI"`
 */
export const useSimulateStoreSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'setContractURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"setDropURI"`
 */
export const useSimulateStoreSetDropUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'setDropURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStoreTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storeAbi,
    address: storeAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storeAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateStoreWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: storeAbi, address: storeAddress, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__
 */
export const useWatchStoreEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: storeAbi,
  address: storeAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"DropCreated"`
 */
export const useWatchStoreDropCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'DropCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchStoreMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Mutated"`
 */
export const useWatchStoreMutatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'Mutated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStoreOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storeAbi}__ and `eventName` set to `"Withdrawn"`
 */
export const useWatchStoreWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storeAbi,
    address: storeAddress,
    eventName: 'Withdrawn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useReadVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadVotesClockMode = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"clock"`
 */
export const useReadVotesClock = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadVotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadVotesEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadVotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: votesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadVotesGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadVotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadVotesNonces = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useWriteVotes = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteVotesDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteVotesDelegateBySig = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useSimulateVotes = /*#__PURE__*/ createUseSimulateContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateVotesDelegate = /*#__PURE__*/ createUseSimulateContract(
  { abi: votesAbi, functionName: 'delegate' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateVotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__
 */
export const useWatchVotesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: votesAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchVotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'EIP712DomainChanged',
  })
