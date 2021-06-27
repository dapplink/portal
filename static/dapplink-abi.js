const DAPPLINK = {
    address: "0x9BB4303f2e9E2ae5eBC80b2Aa48A80bbb28235D4",
    abi: [
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_address",
		    "type": "address"
		}
	    ],
	    "name": "add_admin",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_approved",
		    "type": "address"
		},
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "approve",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "close",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "tokenId",
		    "type": "uint256"
		},
		{
		    "name": "pathname_sha",
		    "type": "address"
		},
		{
		    "name": "file_sha",
		    "type": "address"
		},
		{
		    "name": "file_mime",
		    "type": "string"
		},
		{
		    "name": "n_chunks",
		    "type": "uint256"
		}
	    ],
	    "name": "link",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_domain",
		    "type": "string"
		},
		{
		    "name": "_owner",
		    "type": "address"
		}
	    ],
	    "name": "mint",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_address",
		    "type": "address"
		}
	    ],
	    "name": "remove_admin",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_from",
		    "type": "address"
		},
		{
		    "name": "_to",
		    "type": "address"
		},
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "safeTransferFrom",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_from",
		    "type": "address"
		},
		{
		    "name": "_to",
		    "type": "address"
		},
		{
		    "name": "_tokenId",
		    "type": "uint256"
		},
		{
		    "name": "data",
		    "type": "bytes"
		}
	    ],
	    "name": "safeTransferFrom",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_fee",
		    "type": "uint256"
		}
	    ],
	    "name": "set_approve_fee",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_fee",
		    "type": "uint256"
		}
	    ],
	    "name": "set_transfer_fee",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_operator",
		    "type": "address"
		},
		{
		    "name": "_approved",
		    "type": "bool"
		}
	    ],
	    "name": "setApprovalForAll",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_protocol",
		    "type": "string"
		},
		{
		    "name": "_base_uri",
		    "type": "string"
		}
	    ],
	    "name": "setURI",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_from",
		    "type": "address"
		},
		{
		    "name": "_to",
		    "type": "address"
		},
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "transferFrom",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "tokenId",
		    "type": "uint256"
		},
		{
		    "name": "pathname_sha",
		    "type": "address"
		}
	    ],
	    "name": "unlink",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "tokenId",
		    "type": "uint256"
		},
		{
		    "name": "file_sha",
		    "type": "address"
		},
		{
		    "name": "chunk_index",
		    "type": "uint256"
		},
		{
		    "name": "chunk_data",
		    "type": "bytes"
		}
	    ],
	    "name": "upload_chunk",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_address",
		    "type": "address"
		}
	    ],
	    "name": "withdraw",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "anonymous": false,
	    "inputs": [
		{
		    "indexed": true,
		    "name": "_from",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "_to",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "Transfer",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
		{
		    "indexed": true,
		    "name": "_owner",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "_approved",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "Approval",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
		{
		    "indexed": true,
		    "name": "_owner",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "_operator",
		    "type": "address"
		},
		{
		    "indexed": false,
		    "name": "_approved",
		    "type": "bool"
		}
	    ],
	    "name": "ApprovalForAll",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
		{
		    "indexed": true,
		    "name": "tokenId",
		    "type": "uint256"
		},
		{
		    "indexed": true,
		    "name": "file_sha",
		    "type": "address"
		},
		{
		    "indexed": true,
		    "name": "chunk_index",
		    "type": "uint256"
		},
		{
		    "indexed": false,
		    "name": "chunk_data",
		    "type": "bytes"
		}
	    ],
	    "name": "Chunk",
	    "type": "event"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_owner",
		    "type": "address"
		}
	    ],
	    "name": "balanceOf",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "name": "closed",
	    "outputs": [
		{
		    "name": "",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "name": "domains",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "fee_approve",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "fee_transfer",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		},
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "files",
	    "outputs": [
		{
		    "name": "file_sha",
		    "type": "address"
		},
		{
		    "name": "file_mime",
		    "type": "string"
		},
		{
		    "name": "n_chunks",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "getApproved",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "name": "index_id",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_owner",
		    "type": "address"
		},
		{
		    "name": "_operator",
		    "type": "address"
		}
	    ],
	    "name": "isApprovedForAll",
	    "outputs": [
		{
		    "name": "",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "name",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "ownerOf",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "interfaceID",
		    "type": "bytes4"
		}
	    ],
	    "name": "supportsInterface",
	    "outputs": [
		{
		    "name": "",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "symbol",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_index",
		    "type": "uint256"
		}
	    ],
	    "name": "tokenByIndex",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_owner",
		    "type": "address"
		},
		{
		    "name": "_index",
		    "type": "uint256"
		}
	    ],
	    "name": "tokenOfOwnerByIndex",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_owner",
		    "type": "address"
		}
	    ],
	    "name": "tokensOfOwner",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256[]"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_tokenId",
		    "type": "uint256"
		}
	    ],
	    "name": "tokenURI",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "totalSupply",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "wheel",
	    "outputs": [
		{
		    "name": "",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
    ]
}
const MARKET = {
    address: "0x1036F6522D3F1b1289Eb5Ec7aAD73669407ef769",
    abi: [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "add_sale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			}
		],
		"name": "cancel_sale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "set_admin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "set_listing_fee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_profit_getter",
				"type": "address"
			}
		],
		"name": "set_profit_getter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_dapplink_contract",
				"type": "address"
			},
			{
				"name": "_charity_contract",
				"type": "address"
			},
			{
				"name": "_residue_contract",
				"type": "address"
			},
			{
				"name": "_paw_contract",
				"type": "address"
			},
			{
				"name": "_profit_getter",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "charity_permille",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "listing_fee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pricelist",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "profit_getter",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sale_fee_permille",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
}
const PAW = {
    address: "0xD14f977512250dCE566ca7568eB6A084078e0b23",
    abi: [
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "spender",
		    "type": "address"
		},
		{
		    "name": "tokens",
		    "type": "uint256"
		}
	    ],
	    "name": "approve",
	    "outputs": [
		{
		    "name": "success",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "to",
		    "type": "address"
		},
		{
		    "name": "tokens",
		    "type": "uint256"
		}
	    ],
	    "name": "transfer",
	    "outputs": [
		{
		    "name": "success",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "from",
		    "type": "address"
		},
		{
		    "name": "to",
		    "type": "address"
		},
		{
		    "name": "tokens",
		    "type": "uint256"
		}
	    ],
	    "name": "transferFrom",
	    "outputs": [
		{
		    "name": "success",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "fallback"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "tokenOwner",
		    "type": "address"
		},
		{
		    "name": "spender",
		    "type": "address"
		}
	    ],
	    "name": "allowance",
	    "outputs": [
		{
		    "name": "remaining",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "address"
		},
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "allowed",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "tokenOwner",
		    "type": "address"
		}
	    ],
	    "name": "balanceOf",
	    "outputs": [
		{
		    "name": "balance",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "balances",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "decimals",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint8"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "name",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "owner",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "symbol",
	    "outputs": [
		{
		    "name": "",
		    "type": "string"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "totalSupply",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
    ]
}
const MINTER = {
    address: "0xeAec21f17d77bFE2e12213D161b21066F7b08029",
    abi: [
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_domain",
		    "type": "string"
		}
	    ],
	    "name": "mint",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_admin",
		    "type": "address"
		}
	    ],
	    "name": "set_admin",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_price",
		    "type": "uint256"
		}
	    ],
	    "name": "set_ordinary_domain_price",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_arr",
		    "type": "uint256[]"
		}
	    ],
	    "name": "set_prices",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_profit",
		    "type": "address"
		}
	    ],
	    "name": "set_profit",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
		{
		    "name": "_dapplink_contract",
		    "type": "address"
		},
		{
		    "name": "_paw_contract",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "anonymous": false,
	    "inputs": [
		{
		    "indexed": false,
		    "name": "_domain",
		    "type": "string"
		},
		{
		    "indexed": true,
		    "name": "_owner",
		    "type": "address"
		}
	    ],
	    "name": "Mint",
	    "type": "event"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "admin",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "get_prices",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256[]"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "_domain",
		    "type": "string"
		}
	    ],
	    "name": "get_total_price",
	    "outputs": [
		{
		    "name": "price",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "ordinary_domain_price",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "name": "price_by_word",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "profit",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
    ]
}
const RESIDUE = {
    address: "0x18e49FBA79e283277d1919C286066E85F03f5fC4",
    abi: [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			},
			{
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"name": "_share",
				"type": "uint8"
			}
		],
		"name": "add_beneficiary",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			}
		],
		"name": "remove_last_beneficiary",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token_id",
				"type": "uint256"
			},
			{
				"name": "_residue_percent",
				"type": "uint8"
			}
		],
		"name": "set_residue_percent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_dapplink_contract",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "beneficiaries",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "number_of_beneficiaries",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "residue_percent",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "residue_percent_limit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "share_of_beneficiary",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
}
const CHARITY = {
    address: "0x9Ada92d55cD220F74bc3D1a7702032e2811F3040",
    abi: [
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_charity_address",
		    "type": "address"
		}
	    ],
	    "name": "add_charity",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_admin",
		    "type": "address"
		}
	    ],
	    "name": "change_admin",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_token_id",
		    "type": "uint256"
		},
		{
		    "name": "_charity_address",
		    "type": "address"
		}
	    ],
	    "name": "make_charity_order",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
		{
		    "name": "_charity_address",
		    "type": "address"
		},
		{
		    "name": "_status",
		    "type": "bool"
		}
	    ],
	    "name": "set_charity_allowance",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
		{
		    "name": "_dapplink_contract",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "allowance",
	    "outputs": [
		{
		    "name": "",
		    "type": "bool"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint16"
		}
	    ],
	    "name": "charity_list",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "name": "charity_list_index",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint16"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
		{
		    "name": "",
		    "type": "uint256"
		}
	    ],
	    "name": "charity_orders",
	    "outputs": [
		{
		    "name": "",
		    "type": "address"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "number_of_charities",
	    "outputs": [
		{
		    "name": "",
		    "type": "uint16"
		}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
    ]
}

