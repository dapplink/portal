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
const NFT = {}
const HOST = 'localhost'
let SHA1Generator = {

    hex_chr: "0123456789abcdef",

    hex: function (num) {
	var str = "";
	for (var j = 7; j >= 0; j--)
	    str += this.hex_chr.charAt((num >> (j * 4)) & 0x0F);
	return str;
    },


    str2blks_SHA1: function (str) {
	var nblk = ((str.length + 8) >> 6) + 1;
	var blks = new Array(nblk * 16);
	for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
	for (i = 0; i < str.length; i++)
	    blks[i >> 2] |= str.charCodeAt(i) << (24 - (i % 4) * 8);
	blks[i >> 2] |= 0x80 << (24 - (i % 4) * 8);
	blks[nblk * 16 - 1] = str.length * 8;
	return blks;
    },


    add: function (x, y) {
	var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 0xFFFF);
    },


    rol: function (num, cnt) {
	return (num << cnt) | (num >>> (32 - cnt));
    },


    ft: function (t, b, c, d) {
	if (t < 20) return (b & c) | ((~b) & d);
	if (t < 40) return b ^ c ^ d;
	if (t < 60) return (b & c) | (b & d) | (c & d);
	return b ^ c ^ d;
    },


    kt: function (t) {
	return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
	    (t < 60) ? -1894007588 : -899497514;
    },

    calcSHA1FromByte: function(byteArr) {
	var str = '';
	for(var i=0; i<byteArr.length; i++)
	    str += String.fromCharCode(byteArr[i]);
	return this.calcSHA1(str);
    },

    calcSHA1: function (str) {
	if (str != '') {
	    var x = this.str2blks_SHA1(str);
	    var w = new Array(80);

	    var a = 1732584193;
	    var b = -271733879;
	    var c = -1732584194;
	    var d = 271733878;
	    var e = -1009589776;

	    for (var i = 0; i < x.length; i += 16) {
		var olda = a;
		var oldb = b;
		var oldc = c;
		var oldd = d;
		var olde = e;

		for (var j = 0; j < 80; j++) {
		    if (j < 16) w[j] = x[i + j];
		    else w[j] = this.rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
		    t = this.add(this.add(this.rol(a, 5), this.ft(j, b, c, d)), this.add(this.add(e, w[j]), this.kt(j)));
		    e = d;
		    d = c;
		    c = this.rol(b, 30);
		    b = a;
		    a = t;
		}

		a = this.add(a, olda);
		b = this.add(b, oldb);
		c = this.add(c, oldc);
		d = this.add(d, oldd);
		e = this.add(e, olde);
	    }
	    return this.hex(a) + this.hex(b) + this.hex(c) + this.hex(d) + this.hex(e);
	}
	else {
	    return '';
	}
    }
};

const https		= require( "https"		       );
const fs		= require( "fs"			       );
const path		= require( "path"		       );
const express		= require( "express"		       );
const morgan		= require( "morgan"		       );
const bodyParser	= require( "body-parser"	       );
const cookieParser	= require( "cookie-parser"	       );
const cors		= require( "cors"		       );
const vhost		= require( "vhost"		       );
const axios             = require( "axios"                     );

/*
  const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/dapplink.org/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/dapplink.org/privkey.pem')
  };
*/

const Web3 = require('web3')
const provider = "http://127.0.0.1:8545"
const web3 = new Web3( provider )
const contract = new web3.eth.Contract( DAPPLINK.abi, DAPPLINK.address )
const market   = new web3.eth.Contract( MARKET.abi,   MARKET.address )
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
let NFTs = {}
const app = express();

app.use(  vhost( "*." + HOST, vhostHandler )  )
app.use(  express.static( "static", { dotfiles: 'allow' } )  );
app.use( cors() );
app.listen( 80 ); 
// https.createServer( options, app ).listen( 443 );
/*
  TODO: refactor to dev/production mode switch

  (function force_https() {
  const redirect = express();
  redirect.get('*', function(req, res) {  
  res.redirect('https://' + req.headers.host + req.url);
  // res.redirect('https://example.com' + req.url);
  })
  redirect.listen( 80 )
  })();
*/

app.use( morgan( "dev" ) ); // TODO refactor
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( "/list", function ( req, res ) {
    // res.json( NFTs );
    res.setHeader('Content-Type', 'application/json');
    res.end( JSON.stringify( NFTs, 0, 2 ))
})

function is_correct_nft_domain_name (domain_name) {
    return /^[a-z][a-z0-9]{0,128}$/.test(domain_name)
}

async function vhostHandler( req, res, next ) {
    // req.vhost.hostname = "something.localhost
    // req.path = "/blbla";
    // DELETE res.send("<h1>Subdomains works</h1>"); return
    if ( req.vhost.hostname.indexOf( HOST ) === -1 ) {
	res
	    .status(404)
	    .send("<h1>Invalid address</h1>")
	return
    }
    let q = req.path;
    let domain_name = req.vhost.hostname.substr(  0,  req.vhost.hostname.indexOf( "." + HOST )  )
    let uripath = q.substr(1)
    if ( uripath == "" ) uripath = "index.html"
    // let uripath_sha = SHA1Generator.calcSHA1( uripath )
    let uripath_sha = '0x' + SHA1Generator.calcSHA1( uripath )
    let token_id = web3.utils.hexToNumberString(  web3.utils.keccak256( domain_name )  )
    let address_for_domain = await contract.methods.ownerOf( token_id ).call()
    let is_nft_domain_exists = address_for_domain !== ZERO_ADDRESS
    if ( !is_nft_domain_exists ) {
	res
	    .status( 404 )
	    .send( `<h1>Smart contract: Invalid address for token_id: ${token_id}</h1>` )
	return
    }
    // TODO handle cases when file is uploaded but not linked
    res.header("Access-Control-Allow-Origin", "*")
    contract
	.methods.files( token_id, uripath_sha )
	.call()
	.then( async function ( file ) {
	    // TODO add error handler
	    // if ( uripath == "Document.html" ) console.log( JSON.stringify( file, 0, 2 ) ); // <-----------------------------
	    let da = new Array ( file.n_chunks )
	    try {
		for( let i = 0; i < file.n_chunks; i++ ) {
		    let filter = {
			tokenId:     token_id,
			file_sha:    file.file_sha,
			chunk_index: i.toString()
		    }
		    let log = await contract.getPastEvents( "Chunk", {fromBlock:0, toBlock: 'latest', "filter": filter} )
		    da[ i ] = log[ 0 ].returnValues.chunk_data.substr(2)
		    // if ( uripath == "Document.html" ) console.log('Here'); // <-----------------------------
		}
		let data = new Buffer.from(  da.join( "" ), "hex"  )
		res.writeHead( 200, {
		    "Content-Length": data.length,
		    "Content-Type": file.file_mime
		})
		res.end( data )
	    } catch( e ) {
		res.status( 404 ).send(`<pre>${e}</pre>`) /// TODO put 404 message
	    }
	}) // .catch( error => { console.log('========================='); console.log( error ); console.log('========================='); })
}

async function spider() {

    const tempNFTs = {}
    const total_supply = await contract.methods.totalSupply().call()
    
    for (let i = 1; i <= total_supply; i++) {
	let token_id, domain_name, owner, json_metadata_uri, metadata_object, price;
	try {
	    token_id    = await contract.methods.tokenByIndex( i ).call()
	    domain_name = await contract.methods.domains( token_id ).call()
	    
	    if (  !is_correct_nft_domain_name( domain_name )  ) continue 
	    
	    owner       = await contract.methods.ownerOf( token_id ).call()
	    allowance   = await contract.methods.getApproved( token_id ).call()

	    if ( allowance == MARKET.address ) price = await market.methods.pricelist( token_id ).call()

	    if ( ! tempNFTs[ token_id ] ) tempNFTs[ token_id ] = {}
	    tempNFTs[ token_id ].domain_name = domain_name
	    tempNFTs[ token_id ].owner = owner
	    tempNFTs[ token_id ].price = +price ? price : null

	    try {
		const r = ( await axios.get( 'http://127.0.0.1/nft.json', {headers:{Host: `${domain_name}.${HOST}`}} ) ).data
		if( typeof r.properties.name.description	!== 'string' ) throw 'structure error'
		if( typeof r.properties.description.description	!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.token_type		!== 'string' ) throw 'structure error'
		if( typeof r.properties.image.description	!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_1			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_2			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_3			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_4			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_5			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_6			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_7			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_8			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_9			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.preview_0			!== 'string' ) throw 'structure error'
		if( typeof r.dapplink.detailed_description	!== 'string' ) throw 'structure error'
		tempNFTs[ token_id ].metadata = r
	    } catch (e) {
		tempNFTs[ token_id ].metadata = null
		// console.log( 'Fetch meta error: ' + domain_name );
	    }
	} catch (e) {
	    // console.log( 'Error with token index: ' + i );
	    continue
	}
    }
    NFTs = { ...tempNFTs }
    setTimeout( spider, 10 * 1000 )
}

spider()

