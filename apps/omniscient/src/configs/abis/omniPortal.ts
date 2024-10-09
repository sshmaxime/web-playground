const OmniPortalABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "ECDSAInvalidSignature",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "length",
				type: "uint256",
			},
		],
		name: "ECDSAInvalidSignatureLength",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32",
			},
		],
		name: "ECDSAInvalidSignatureS",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidInitialization",
		type: "error",
	},
	{
		inputs: [],
		name: "MerkleProofInvalidMultiproof",
		type: "error",
	},
	{
		inputs: [],
		name: "NotInitializing",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{
		inputs: [],
		name: "ReentrancyGuardReentrantCall",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "oracle",
				type: "address",
			},
		],
		name: "FeeOracleSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "FeesCollected",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "srcChainId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
		],
		name: "InXBlockOffsetSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "srcChainId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
		],
		name: "InXMsgOffsetSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint64",
				name: "version",
				type: "uint64",
			},
		],
		name: "Initialized",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "Paused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "Unpaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "setId",
				type: "uint64",
			},
		],
		name: "ValidatorSetAdded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "XCallPaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "chainId",
				type: "uint64",
			},
		],
		name: "XCallToPaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "chainId",
				type: "uint64",
			},
		],
		name: "XCallToUnpaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "XCallUnpaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "destChainId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "fees",
				type: "uint256",
			},
		],
		name: "XMsg",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint16",
				name: "size",
				type: "uint16",
			},
		],
		name: "XMsgMaxDataSizeSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "XMsgMaxGasLimitSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "XMsgMinGasLimitSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "sourceChainId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "gasUsed",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "relayer",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "success",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "error",
				type: "bytes",
			},
		],
		name: "XReceipt",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint16",
				name: "size",
				type: "uint16",
			},
		],
		name: "XReceiptMaxErrorSizeSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "cutoff",
				type: "uint8",
			},
		],
		name: "XSubValsetCutoffSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "chainId",
				type: "uint64",
			},
		],
		name: "XSubmitFromPaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "chainId",
				type: "uint64",
			},
		],
		name: "XSubmitFromUnpaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "XSubmitPaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "XSubmitUnpaused",
		type: "event",
	},
	{
		inputs: [],
		name: "ActionXCall",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "ActionXSubmit",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "KeyPauseAll",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "XSubQuorumDenominator",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "XSubQuorumNumerator",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "valSetId",
				type: "uint64",
			},
			{
				components: [
					{
						internalType: "address",
						name: "addr",
						type: "address",
					},
					{
						internalType: "uint64",
						name: "power",
						type: "uint64",
					},
				],
				internalType: "struct XTypes.Validator[]",
				name: "validators",
				type: "tuple[]",
			},
		],
		name: "addValidatorSet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "chainId",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "collectFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "destChainId",
				type: "uint64",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
			{
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "feeFor",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "feeOracle",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "inXBlockOffset",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "inXMsgOffset",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "address",
						name: "feeOracle",
						type: "address",
					},
					{
						internalType: "uint64",
						name: "omniChainId",
						type: "uint64",
					},
					{
						internalType: "uint64",
						name: "omniCChainId",
						type: "uint64",
					},
					{
						internalType: "uint64",
						name: "xmsgMaxGasLimit",
						type: "uint64",
					},
					{
						internalType: "uint64",
						name: "xmsgMinGasLimit",
						type: "uint64",
					},
					{
						internalType: "uint16",
						name: "xmsgMaxDataSize",
						type: "uint16",
					},
					{
						internalType: "uint16",
						name: "xreceiptMaxErrorSize",
						type: "uint16",
					},
					{
						internalType: "uint8",
						name: "xsubValsetCutoff",
						type: "uint8",
					},
					{
						internalType: "uint64",
						name: "cChainXMsgOffset",
						type: "uint64",
					},
					{
						internalType: "uint64",
						name: "cChainXBlockOffset",
						type: "uint64",
					},
					{
						internalType: "uint64",
						name: "valSetId",
						type: "uint64",
					},
					{
						components: [
							{
								internalType: "address",
								name: "addr",
								type: "address",
							},
							{
								internalType: "uint64",
								name: "power",
								type: "uint64",
							},
						],
						internalType: "struct XTypes.Validator[]",
						name: "validators",
						type: "tuple[]",
					},
				],
				internalType: "struct OmniPortal.InitParams",
				name: "p",
				type: "tuple",
			},
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "actionId",
				type: "bytes32",
			},
		],
		name: "isPaused",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "actionId",
				type: "bytes32",
			},
			{
				internalType: "uint64",
				name: "chainId_",
				type: "uint64",
			},
		],
		name: "isPaused",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isPaused",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "isSupportedDest",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "isSupportedShard",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isXCall",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "latestValSetId",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "network",
		outputs: [
			{
				internalType: "uint64",
				name: "chainId",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "omniCChainId",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "omniChainId",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "outXMsgOffset",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "pause",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "pauseXCall",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "chainId_",
				type: "uint64",
			},
		],
		name: "pauseXCallTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "pauseXSubmit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "chainId_",
				type: "uint64",
			},
		],
		name: "pauseXSubmitFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "feeOracle_",
				type: "address",
			},
		],
		name: "setFeeOracle",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "sourceChainId",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
		],
		name: "setInXBlockOffset",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "sourceChainId",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "shardId",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "offset",
				type: "uint64",
			},
		],
		name: "setInXMsgOffset",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint64",
						name: "chainId",
						type: "uint64",
					},
					{
						internalType: "uint64[]",
						name: "shards",
						type: "uint64[]",
					},
				],
				internalType: "struct XTypes.Chain[]",
				name: "network_",
				type: "tuple[]",
			},
		],
		name: "setNetwork",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint16",
				name: "numBytes",
				type: "uint16",
			},
		],
		name: "setXMsgMaxDataSize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "setXMsgMaxGasLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "setXMsgMinGasLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint16",
				name: "numBytes",
				type: "uint16",
			},
		],
		name: "setXReceiptMaxErrorSize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint8",
				name: "xsubValsetCutoff_",
				type: "uint8",
			},
		],
		name: "setXSubValsetCutoff",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "unpause",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "unpauseXCall",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "chainId_",
				type: "uint64",
			},
		],
		name: "unpauseXCallTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "unpauseXSubmit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "chainId_",
				type: "uint64",
			},
		],
		name: "unpauseXSubmitFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "valSet",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "valSetTotalPower",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "destChainId",
				type: "uint64",
			},
			{
				internalType: "uint8",
				name: "conf",
				type: "uint8",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
			{
				internalType: "uint64",
				name: "gasLimit",
				type: "uint64",
			},
		],
		name: "xcall",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "xmsg",
		outputs: [
			{
				components: [
					{
						internalType: "uint64",
						name: "sourceChainId",
						type: "uint64",
					},
					{
						internalType: "address",
						name: "sender",
						type: "address",
					},
				],
				internalType: "struct XTypes.MsgContext",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "xmsgMaxDataSize",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "xmsgMaxGasLimit",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "xmsgMinGasLimit",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "xreceiptMaxErrorSize",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "xsubValsetCutoff",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "attestationRoot",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "validatorSetId",
						type: "uint64",
					},
					{
						components: [
							{
								internalType: "uint64",
								name: "sourceChainId",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "consensusChainId",
								type: "uint64",
							},
							{
								internalType: "uint8",
								name: "confLevel",
								type: "uint8",
							},
							{
								internalType: "uint64",
								name: "offset",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "sourceBlockHeight",
								type: "uint64",
							},
							{
								internalType: "bytes32",
								name: "sourceBlockHash",
								type: "bytes32",
							},
						],
						internalType: "struct XTypes.BlockHeader",
						name: "blockHeader",
						type: "tuple",
					},
					{
						components: [
							{
								internalType: "uint64",
								name: "destChainId",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "shardId",
								type: "uint64",
							},
							{
								internalType: "uint64",
								name: "offset",
								type: "uint64",
							},
							{
								internalType: "address",
								name: "sender",
								type: "address",
							},
							{
								internalType: "address",
								name: "to",
								type: "address",
							},
							{
								internalType: "bytes",
								name: "data",
								type: "bytes",
							},
							{
								internalType: "uint64",
								name: "gasLimit",
								type: "uint64",
							},
						],
						internalType: "struct XTypes.Msg[]",
						name: "msgs",
						type: "tuple[]",
					},
					{
						internalType: "bytes32[]",
						name: "proof",
						type: "bytes32[]",
					},
					{
						internalType: "bool[]",
						name: "proofFlags",
						type: "bool[]",
					},
					{
						components: [
							{
								internalType: "address",
								name: "validatorAddr",
								type: "address",
							},
							{
								internalType: "bytes",
								name: "signature",
								type: "bytes",
							},
						],
						internalType: "struct XTypes.SigTuple[]",
						name: "signatures",
						type: "tuple[]",
					},
				],
				internalType: "struct XTypes.Submission",
				name: "xsub",
				type: "tuple",
			},
		],
		name: "xsubmit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const;

export { OmniPortalABI };