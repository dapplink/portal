const DAPPLINK = {
    address: "0x01953C35BC157467a3598B302CD1487D30Cf69F1",
    mint_gas: 152674,
    abi: [
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
		"constant": false,
		"inputs": [
			{
				"name": "new_approve_fee",
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
				"name": "new_admin",
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
		"constant": false,
		"inputs": [],
		"name": "withdraw",
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
		"inputs": [],
		"name": "fee_mint",
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
				"name": "new_mint_fee",
				"type": "uint256"
			}
		],
		"name": "set_mint_fee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
				"name": "new_transfer_fee",
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
	}
],
    bytecode: {}
}


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

const https		= require( "https"		);
const fs		= require( "fs"			);
const path		= require( "path"		);
const asyn		= require( "async"		);
const express		= require( "express"		);
const morgan		= require( "morgan"		);
const bodyParser	= require( "body-parser"	);
const cookieParser	= require( "cookie-parser"	);
const cors		= require( "cors"		);
const multer		= require( "multer"		);
const vhost		= require( "vhost"		);

/*
TODO 
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/dappweb.io/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/dappweb.io/privkey.pem')
};
*/

const Web3 = require('web3');
let web3 = new Web3( "http://localhost:8545" ); // TODO refactor to dev/prod
const contract = new web3.eth.Contract( DAPPLINK.abi, DAPPLINK.address );
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
const app = express();

app.use(  vhost( "*.localhost", vhostHandler )  ); // TODO refactor to dev/production switcher global variable for domain

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

const HDWalletProvider = require('truffle-hdwallet-provider');


async function vhostHandler( req, res, next ) {
    // req.vhost.hostname = "something.localhost
    // req.path = "/blbla";
    // DELETE res.send("<h1>Subdomains works</h1>"); return
    if ( req.vhost.hostname.indexOf( "localhost" ) === -1 ) {
	res
	    .status(404)
	    .send("<h1>Invalid address</h1>")
	return
    }
    let q = req.path;
    let domain_name = req.vhost.hostname.substr(  0,  req.vhost.hostname.indexOf( ".localhost" )  )
    let uripath = q.substr(1)
    if ( uripath == "" ) uripath = "index.html"
    let uripath_sha = SHA1Generator.calcSHA1( uripath )
    let token_id = web3.utils.hexToNumberString(  web3.utils.keccak256( domain_name )  )

    let address_for_domain = await contract.methods.ownerOf( token_id ).call()

    let is_nft_domain_exists = address_for_domain !== ZERO_ADDRESS
    if ( !is_nft_domain_exists ) {
	res
	    .status( 404 )
	    .send( `<h1>Smart contract: Invalid address for token_id: ${token_id}</h1>` )
	return
    }
    res.header("Access-Control-Allow-Origin", "*")
    contract
	.methods.files( token_id, uripath_sha )
	.call()
	.then( async function ( file ) {
	    let da = new Array ( file.n_chunks )
	    try {
		for( let i = 0; i < file.n_chunks; i++ ) {
		    let filter = {
			tokenId:     token_id,
			file_sha:    file.file_sha,
			chunk_index: i.toString()
		    }
		    let log = await contract.getPastEvents( "Chunk", {fromBlock:0, toBlock: 'latest', "filter": filter } )
		    da[ i ] = log[ 0 ].returnValues.chunk_data.substr(2)
		}
		let data = new Buffer.from(  da.join( "" ), "hex"  )
		res.writeHead( 200, {
		    "Content-Length": data.length,
		    "Content-Type": file.file_mime
		})
		res.end( data )
	    } catch( e ) {
		res.status( 404 ).send(`<pre>${e}</pre>`)
	    }
	})
}
