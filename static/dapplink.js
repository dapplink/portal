let contract, account, web3, market, paw, minter, residue, charity
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
const CHUNK = 25000
let file, filesha, filemime, filesize, uripath, chunks
const HOST = 'localhost'
let catalogue = {}

function is_correct_nft_domain_name (domain_name) {
    return /^[a-z][a-z0-9]{0,128}$/.test(domain_name)
}

async function open_user_nft_tab () {
    $( ".tab" ).hide() 
    $( "#tab-user-nft" ).show()
    $( '.main-menu__link' ).removeClass( 'main-menu__link--active' )
    try {
	let tokens  = await contract.methods.tokensOfOwner( account ).call()
	let domains = await Promise.all(   tokens.map(  async ( token ) => await contract.methods.domains( token ).call()  )   )
	d3.select( "#tab-user-nft__ul" ).selectAll('li').remove()
	d3.select( "#tab-user-nft__ul" )
	    .selectAll( "li" )
	    .data( domains )
	    .enter()
	    .append( "li" )
	    .html( ( d, i ) =>
		   `<div class="user-nft__token-container">` +
		   `    <div class="user-nft__token-index">${i}</div>` +
		   `    <div class="user-nft__token-properties">` +
		   `      <div class="user-nft__token-domain">${d}</div>` +
		   `      <div class="user-nft_token-id">${tokens[i]}</div> ` +
		   `    </div>` +
		   `</div>`
		 )
	    .on(  "click",  async function (d,i) {
		d3.event.preventDefault()
		$( ".tab" ).hide()
		$( "#tab-user-nft-actions" ).show()

		$( '.tab-header__token-id' ).text( tokens[i]  )
		$( '.tab-header__domain'   ).text( domains[i] )
		
		document.getElementById( "nft-actions-button__files"    ).disabled = false
		document.getElementById( "nft-actions-button__finalize" ).disabled = false
		
		document.getElementById( "residue__add"         ).disabled = false
		document.getElementById( "residue__undo"        ).disabled = false
		document.getElementById( "residue-percent__set" ).disabled = false

		document.getElementById( "user-nft-properties__button_upload" ).disabled = false
		
		let isFinalize = await contract.methods.closed(  tokens[ i ]  ).call() // todo add error handler
		if ( isFinalize ) {
		    document.getElementById( "nft-actions-button__files"    ).disabled = true
		    document.getElementById( "nft-actions-button__finalize" ).disabled = true

		    document.getElementById( "residue__add"         ).disabled = true
		    document.getElementById( "residue__undo"        ).disabled = true
		    document.getElementById( "residue-percent__set" ).disabled = true

		    document.getElementById( "user-nft-properties__button_upload" ).disabled = true
		}

		d3.select( "#nft-actions-button__properties" ).on( "click", function () {
		    $( ".tab" ).hide()
		    $( "#user-nft-properties__token-name"           ).val( "" )
		    $( "#user-nft-properties__token-description"    ).val( "" )
		    $( "#user-nft-properties__token-image"          ).val( "" )
		    $( "#user-nft-properties__preview_1"            ).val( "" )
		    $( "#user-nft-properties__preview_2"            ).val( "" )
		    $( "#user-nft-properties__preview_3"            ).val( "" )
		    $( "#user-nft-properties__preview_4"            ).val( "" )
		    $( "#user-nft-properties__preview_5"            ).val( "" )
		    $( "#user-nft-properties__preview_6"            ).val( "" )
		    $( "#user-nft-properties__preview_7"            ).val( "" )
		    $( "#user-nft-properties__preview_8"            ).val( "" )
		    $( "#user-nft-properties__preview_9"            ).val( "" )
		    $( "#user-nft-properties__preview_0"            ).val( "" )
		    $( "#user-nft-properties__detailed-description" ).val( "" )
		    $.getJSON( `http://${ domains[i] }.${HOST}/nft.json`, function (  nft, status  ) {
			if ( status !== "success" ) {
			    open_error_message_tab( "Error", "Can't read token properties" )
			    return
			}
			try {
			    $( "#user-nft-properties__token-name"           ).val( nft.properties.name.description        )
			    $( "#user-nft-properties__token-description"    ).val( nft.properties.description.description )
			    $( "#user-nft-properties__token-type"           ).val( nft.dapplink.token_type                )
			    $( "#user-nft-properties__token-image"          ).val( nft.properties.image.description       )
			    $( "#user-nft-properties__preview_1"            ).val( nft.dapplink.preview_1                 )
			    $( "#user-nft-properties__preview_2"            ).val( nft.dapplink.preview_2                 )
			    $( "#user-nft-properties__preview_3"            ).val( nft.dapplink.preview_3                 )
			    $( "#user-nft-properties__preview_4"            ).val( nft.dapplink.preview_4                 )
			    $( "#user-nft-properties__preview_5"            ).val( nft.dapplink.preview_5                 )
			    $( "#user-nft-properties__preview_6"            ).val( nft.dapplink.preview_6                 )
			    $( "#user-nft-properties__preview_7"            ).val( nft.dapplink.preview_7                 )
			    $( "#user-nft-properties__preview_8"            ).val( nft.dapplink.preview_8                 )
			    $( "#user-nft-properties__preview_9"            ).val( nft.dapplink.preview_9                 )
			    $( "#user-nft-properties__preview_0"            ).val( nft.dapplink.preview_0                 )
			    $( "#user-nft-properties__detailed-description" ).val( nft.dapplink.detailed_description      )
			} catch(e) {
			    $( "#user-nft-properties__token-name"           ).val( "" )
			    $( "#user-nft-properties__token-description"    ).val( "" )
			    $( "#user-nft-properties__token-image"          ).val( "" )
			    $( "#user-nft-properties__preview_1"            ).val( "" )
			    $( "#user-nft-properties__preview_2"            ).val( "" )
			    $( "#user-nft-properties__preview_3"            ).val( "" )
			    $( "#user-nft-properties__preview_4"            ).val( "" )
			    $( "#user-nft-properties__preview_5"            ).val( "" )
			    $( "#user-nft-properties__preview_6"            ).val( "" )
			    $( "#user-nft-properties__preview_7"            ).val( "" )
			    $( "#user-nft-properties__preview_8"            ).val( "" )
			    $( "#user-nft-properties__preview_9"            ).val( "" )
			    $( "#user-nft-properties__preview_0"            ).val( "" )
			    $( "#user-nft-properties__detailed-description" ).val( "" )
			}
		    })
		    $( '#user-nft-properties__token-id' ).text(  tokens[ i ]  )
		    $( '#user-nft-properties__token-domain' ).text(  domains[ i ]  )
		    $( "#tab-user-nft-properties" ).show()
		})

		d3.select( "#user-nft-properties__button_upload" ).on( "click",  function () {
		    const nft_json = {
			title: "Asset Metadata",
			type: "object",
			properties: {
			    name: {
				type: "string",
				description: $( "#user-nft-properties__token-name" ).val(),
			    },
			    description: {
				type: "string",
				description: $( "#user-nft-properties__token-description" ).val(),
			    },
			    image: {
				type: "string",
				description: $( "#user-nft-properties__token-image" ).val()
			    }			    
			},
			dapplink: {
			    token_type: $( "#user-nft-properties__token-type" ).val(),
			    preview_1:  $( "#user-nft-properties__preview_1"  ).val(),
			    preview_2:  $( "#user-nft-properties__preview_2"  ).val(),
			    preview_3:  $( "#user-nft-properties__preview_3"  ).val(),
			    preview_4:  $( "#user-nft-properties__preview_4"  ).val(),
			    preview_5:  $( "#user-nft-properties__preview_5"  ).val(),
			    preview_6:  $( "#user-nft-properties__preview_6"  ).val(),
			    preview_7:  $( "#user-nft-properties__preview_7"  ).val(),
			    preview_8:  $( "#user-nft-properties__preview_8"  ).val(),
			    preview_9:  $( "#user-nft-properties__preview_9"  ).val(),
			    preview_0:  $( "#user-nft-properties__preview_0"  ).val(),
			    detailed_description: $( "#user-nft-properties__detailed-description" ).val()
			}
		    }
		    function str2ab( str ) {
			var buf = new ArrayBuffer( str.length * 2 );
			var bufView = new Uint16Array( buf );
			for (var i = 0, strLen = str.length; i < strLen; i++) {
			    bufView[ i ] = str.charCodeAt( i );
			}
			return buf;
		    }
		    function getBytes( str ) {
			let intArray = str.split( '' ).map( function( c ) { return c.charCodeAt( 0 ); } );
			let byteArray = new Uint8Array( intArray.length );
			for ( let i = 0; i < intArray.length; i++ )
			    byteArray[ i ] = intArray[ i ];
			return byteArray;
		    }
		    // let nft_json_array_buffer = str2ab(  JSON.stringify( nft_json, 0, 2 )  )
		    let nft_json_array_buffer = getBytes(  JSON.stringify( nft_json, 0, 2 )  )
		    const filesha = SHA1Generator.calcSHA1FromByte(  new Uint8Array( nft_json_array_buffer )  )
		    const filemime = "application/json"
		    const chunks = 1
		    const chunk_number = 0
		    d3.select( "#user-link-nft-metadata__button_link" ).on( "click", function() {
			contract.methods.link( tokens[ i ], "0x" + SHA1Generator.calcSHA1( "nft.json" ), "0x" + filesha, filemime, chunks )
			    .send( { from: account })
			    .then( function () {
				open_success_message_tab( "NFT metadata linked", "NFT metadata has been success linked" )
			    })
		    })
		    contract.methods.upload_chunk( tokens[ i ], filesha, chunk_number, '0x' + buf2hex( nft_json_array_buffer ))
			.send( { from: account })
			.then( function () {
			    $( ".tab" ).hide()
			    $( "#tab-user-link-nft-metadata" ).show()
			})
			.catch( function () {
			    open_error_message_tab( "Error", "NFT metadata uploading error" )
			})
		})
		
		d3.select( "#nft-actions-button__files" ).on( "click", function () {
		    $( ".tab" ).hide()
		    $( "#tab-files").show()
		})
		
		$( "#files__upload" ).click( function() {
		    $( ".tab" ).hide()
		    $( "#tab-upload-wizard-1" ).show()
		    $( "#file" ).val( "" )
		    $( "#uripath" ).val( "" )
		})

		$( "#files__unlink" ).click( function () {
		    $( ".tab" ).hide()
		    $( "#tab-unlink" ).show()
		})

		$( "#unlink__button" ).unbind().click( function () {
		    let filepath_to_unlink = $( "#unlink__input" ).val()
		    let sha_from_filepath_to_unlink = "0x" + SHA1Generator.calcSHA1( filepath_to_unlink )
		    let token_id = tokens[ i ]
		    contract.methods.unlink( token_id, sha_from_filepath_to_unlink ).send( {from: account} )
			.then( function () {
			    open_success_message_tab( "File unlinked", "The file has been successfully unlinked" )
			})
			.catch( function (e) {
			    open_error_message_tab( "File unlinking error ", "An error has been occurred during the operation" )
			})
		})

		document.getElementById( "file" ).onchange = function() {    
		    document.getElementById( "uripath" ).value = document.getElementById( "file" ).files[0].name;
		}

		$( "#chop-button" ).click ( function () {
		    if (  document.getElementById( "uripath" ).length == 0 ) {
			open_error_message_tab( "Error", "No path" )
			return
		    }
		    d3.select( "#tab-upload-wizard-2" ) .selectAll( "button" ).remove()
		    file = document.getElementById( "file" ).files[ 0 ];
		    let reader = new FileReader();
		    reader.onloadend = function(evt) {
			if ( evt.target.readyState == FileReader.DONE ) { 
			    filesize	= file.size
			    filemime	= file.type
			    uripath	= document.getElementById( "uripath" ).value;
			    filesha	= SHA1Generator.calcSHA1FromByte(  new Uint8Array( evt.target.result )  );
			    chunks	= Math.ceil( filesize / CHUNK ); 
			    $('#tab-upload-wizard-1').hide()
			    $('#tab-upload-wizard-2').show()
			    chunks_state = new Array( chunks ).fill(0);
			    d3.select( "#tab-upload-wizard-2" )
				.selectAll( "button" )
				.data( chunks_state )
				.enter()
				.append( "button" )
				.attr( "id", ( d, i ) => "chunk-button-" + i )
				.attr( "class", "button")
				.style( "display", "inline-block" )
				.style( "width", "100px" )
				.text( ( d, i ) => `Upload chunk ${i}` )
				.on( "click",  function ( d, chunk_index ) {
				    let start = CHUNK * chunk_index;
				    let stop  = CHUNK * ( chunk_index + 1 ) 
				    let reader = new FileReader();
				    reader.onloadend = function(evt) {
					if ( evt.target.readyState == FileReader.DONE ) { 
					    d3.select( "#chunk-button-" + chunk_index ).style( "background-color", "yellow" );
					    contract.methods.upload_chunk( tokens[ i ], filesha, chunk_index, '0x' + buf2hex( evt.target.result ))
						.send( { from: account })
						.then( ( transaction ) => {
						    chunks_state[ chunk_index ] = 1;
						    d3.select( "#chunk-button-" + chunk_index ).property( "disabled", true );
						    d3.select( "#chunk-button-" + chunk_index ).style( "background-color", "#02ea02" );
						    d3.select( "#chunk-button-" + chunk_index ).style( "outline", "1px solid #02ea02" );
						    if (  chunks_state.every( v=> v == 1 )  ) {
							$( ".tab" ).hide()
							$( "#tab-upload-wizard-3" ).show()
						    }
						})
						.catch( ()=> alert( "Transaction error" ) );
					}	
				    }
				    let blob = file.slice( start, stop );
				    reader.readAsArrayBuffer(blob);
				});
			}
		    }	
		    let blob = file;
		    reader.readAsArrayBuffer(blob);
		})

		$( "#upload-wizard__link-button" ).unbind().click( function() {
		    contract.methods.link(
			tokens[ i ],
			"0x" + SHA1Generator.calcSHA1( uripath ),
			"0x" + filesha,
			filemime,
			chunks
		    )
			.send( { from: account })
			.then( function () {
			    open_success_message_tab( "Linked", "The file was successfully linked" )
			})
			.catch( function () {
			    open_error_message_tab( "Linking error", "" )
			});
		})

		d3.select( "#nft-actions-button__approve" ).on( "click", async function() {
		    $(".tab").hide()
		    $( "#tab-user-approve" ).show()
		    $( "#user-approve__input" ).val( "" )
		    $( "#user-approve-button__reset" ).prop( "disabled", true )

		    let approved_address
		    let approve_fee
		    try {
			approved_address = await contract.methods.getApproved( tokens[i] ).call()
			approve_fee = await contract.methods.fee_approve().call()
		    } catch (e) {
			open_error_message_tab( "Error", "An error has been occurred during the operation" )
		    }
		    
		    if ( approved_address !== ZERO_ADDRESS ) {
			$( "#user-approve-button__reset" ).prop( "disabled", false )
			$( "#user-approve__input" ).val( approved_address )
		    }
		    
		    $( "#user-approve-button__approve" ).unbind().click( function () {
			let new_approved_address = $( "#user-approve__input" ).val()
			let is_new_address_correct = web3.utils.isAddress( new_approved_address )
			if ( !is_new_address_correct ) {
			    open_error_message_tab( "Error", "Approved address is incorrect" )
			    return
			}
			contract.methods.approve( new_approved_address, tokens[i] ).send(
			    {
				from: account,
				// gasPrice: gas_price,
				// gas: estimate_gas,
				value: approve_fee
			    })
			    .then( function () {
				open_success_message_tab( "Operation complete", "New approved address has been set successfully" )
			    }).catch( function () {
				open_error_message_tab( "Error", "An error has been occurred during the operation" )
			    })
		    })

		    $( "#user-approve-button__reset" ).unbind().click( function () {
			contract.methods.approve( ZERO_ADDRESS, tokens[i] ).send(
			    {
				from: account,
				// gasPrice: gas_price,
				// gas: estimate_gas,
				value: approve_fee
			    })
			    .then( function () {
				open_success_message_tab( "Operation complete", "The approved address has been reset successfully" )
			    }).catch( function () {
				open_error_message_tab( "Error", "An error has been occurred during the operation" )
			    })
		    })
		    

		})
		d3.select( "#nft-actions-button__transfer" ).on( "click", function () {
		    $( ".tab" ).hide()
		    $( "#tab-user-transfer" ).show()
		    $( "#user-transfer__address" ).val( "" );
		    $( "#user-transfer__button-transfer" ).click( function() {
			let address = document.getElementById( "user-transfer__address" ).value
			is_address_field_correct = web3.utils.isAddress( address )
			if ( !is_address_field_correct ) {
			    open_error_message_tab( "Transfer Error", "Invalid address" )
			    return
			}
			let token_id = tokens[ i ]
			contract.methods.transferFrom( account, address, token_id ).send( {from: account} )
			    .then( function () {
				open_success_message_tab( "Transfer is done", `NFT id: ${token_id} successfully transfered to ${address}` )
			    })
			    .catch( function () {
				open_error_message_tab( "Transfer error", "An error has been occurred during the operation" )
			    })
		    })
		})

		d3.select( "#nft-actions-button__residue" ).on( "click", async function() {
		    $( ".tab" ).hide()
		    $( "#tab-residuals" ).show()
		    const is_token_closed = await contract.methods.closed( tokens[i] ).call()
		    if (is_token_closed) {
			document.getElementById( "residue__add"  ).disabled = true
			document.getElementById( "residue__undo" ).disabled = true
		    }
		    
		})

		d3.select( "#residue__show" ).on( "click", async function () {
		    $( ".tab" ).hide()
		    $( "#tab-residuals__show" ).show()
		    const beneficiaries = []
		    try {
			let number_of_beneficiaries = await residue.methods.number_of_beneficiaries( tokens[i] ).call()
			for (let j = 1; j <= number_of_beneficiaries; j++) {
			    let beneficiary = await residue.methods.beneficiaries( tokens[i], j ).call()
			    let share       = await residue.methods.share_of_beneficiary( tokens[i], j ).call()
			    beneficiaries.push( {beneficiary: beneficiary, share: share} )
			}
			d3.select( "#residue__table").select( "tbody" ).selectAll( "tr" ).remove()
			d3.select( "#residue__table" )
			    .select( "tbody" )
			    .selectAll( "tr" )
			    .data( beneficiaries )
			    .enter()
			    .append( "tr" )
			    .html( (d) => `<td> ${ d.beneficiary } </td><td> ${ d.share } </td>`  )
		    } catch(e) {
			open_error_message_tab();
		    }
		})
		d3.select( ".residue__back" ).on( "click", function() {
		    $( ".tab" ).hide()
		    $( "#tab-residuals" ).show()
		}) 
		d3.select( "#residue__add" ).on( "click", async function () {
		    $( ".tab" ).hide()
		    $( "#residue-add__address" ).val( "" )
		    $( "#residue-add__share"   ).val( "" )
		    $( "#tab-residue__add" ).show()
		})
		d3.select( "#residue-add__button-set" ).on( "click", async function() {
		    let beneficiary = {
			address: $( "#residue-add__address" ).val(),
			share: $( "#residue-add__share" ).val()
		    }
		    try {
			await residue.methods.add_beneficiary( tokens[i], beneficiary.address, beneficiary.share ).send( {from: account} )
			$( ".tab" ).hide()
			open_success_message_tab( "Operation complete", "Beneficiary has been successfully added" )
		    } catch(e) {
			open_error_message_tab( "Operation error", "An error has been occurred during operation" )
		    }
		})
		d3.select( "#residue__undo" ).on( "click", async function () {
		    try {
			await residue.methods.remove_last_beneficiary( tokens[i] ).send( {from: account} )
			open_success_message_tab( "Operation complete", "Last added beneficiary has been successfully removed from residue list" )
		    } catch(e){
			open_error_message_tab( "Operation error", "An error has been occurred during operation" )
		    }
		})
		d3.select( "#residue__volume" ).on( "click", async function () {
		    $( ".tab" ).hide()
		    $( "#tab-residue-percent" ).show()
		    const is_token_closed = await contract.methods.closed( tokens[i] ).call()
		    is_token_closed
			? document.getElementById( "residue-percent__set" ).disabled = true
			: document.getElementById( "residue-percent__set" ).disabled = false
		    let current_percent
		    try {
			current_percent = await residue.methods.residue_percent( tokens[i] ).call()
			$( "#residue-percent__value" ).val( current_percent )
		    } catch(e) {
			open_error_message_tab( "Operation error", "An error has been occurred during operation" )
		    }
		    
		})
		d3.select( "#residue-percent__set" ).on( "click", async function() {
		    let percent = $( "#residue-percent__value" ).val()
		    try {
			await residue.methods.set_residue_percent( tokens[i], percent ).send( {from: account} )
			open_success_message_tab( "Operation complete", "Residue percent has been set" )
		    } catch(e) {
			open_error_message_tab( "Operation error", "An error has been occurred during operation" )
		    }
		})
		
		d3.select( "#nft-actions-button__market" ).on( "click", function() {
		    $( ".tab" ).hide()
		    let token_id = tokens[ i ]
		    if ( !catalogue[ token_id ].price ) {
			$( "#tab-user-approve-sale" ).show()
		    } else {
			$( "#tab-user-cancel-sale" ).show()
		    }
		})

		d3.select( "#user-approve-sale__button" ).on( "click", async function() {
		    let token_id = tokens[ i ]
		    try {
			await contract.methods.approve( MARKET.address, token_id ).send( {from: account} )
			$( ".tab" ).hide()
			const number_of_charities = await charity.methods.number_of_charities().call()
			const charity_list = []
			for ( let j = 1; j <= number_of_charities; j++ ) {
			    charity_list.push( await charity.methods.charity_list( j ).call() )
			}
			d3.select( "#user-charity-select" ).selectAll( "option" ).remove()
			d3.select( "#user-charity-select" )
			    .selectAll( "option" )
			    .data( charity_list )
			    .enter()
			    .append( "option" )
			    .attr( "value", d => d )
			    .text( d => d )
			$( "#tab-user-charity" ).show()
		    } catch(e) {
			open_error_message_tab( "Operation Error", "An error has been occurred during the operation" )
		    }
		})

		d3.select( "#user-charity__select-button" ).on( "click", async function() {
		    const charity_address = d3.select( "#user-charity-select" ).property( "value" )
		    try {
			await charity.methods.make_charity_order( tokens[i], charity_address ).send( {from: account} )
			$( ".tab" ).hide()
			$( "#tab-user-sale" ).show()
		    } catch( e ) {
			open_error_message_tab()
		    }
		})
		
		d3.select( "#user-sale__button-sale" ).on( "click", function() {
		    let eth = $("#user-sale__input-price").val()
		    let price = web3.utils.toWei( eth, "ether" )
		    let token_id = tokens[ i ]
		    market.methods.add_sale( token_id, price ).send( {from:account} )
			.then( function() {
			    open_success_message_tab( "Operation complete", "NFT is put on the market" )
			})
			.catch( function() {
			    open_error_message_tab( "Operation Error", "An error has been occurred during the operation" )
			})
		})

		d3.select( "#user-cancel-sale__button-cancel-sale" ).on( "click", function() {
		    let token_id = tokens[ i ]
		    // TODO get rid of last para in smart contract
		    market.methods.cancel_sale( token_id, 0 ).send( {from: account} )
			.then( function() {
			    open_success_message_tab( "Operation complete", "Sale for NFT is canceled" )
			})
			.catch( function() {
			    open_error_message_tab( "Operation error", "An error has been occurred during the operation" )
			})
		})
		
		d3.select( "#nft-actions-button__finalize" ).on( "click", function () {
		    $( ".tab" ).hide()
		    $( "#tab-user-finalize" ).show()
		    $( "#user-finalize__confirm" ).click( function () {
			let token_id = tokens[ i ]
			contract.methods.close( token_id ).send( {from: account} )
			    .then( function () {
				open_success_message_tab( "NFT finalizeed", `NFT width id: ${token_id} has been successfully finalized` )
			    })
			    .catch( function () {
				open_error_message_tab( "NFT finalization error", "An error has been occurred during the operation" )
			    })
		    })
		    $( "#user-finalize__cancel" ).click( function () {
			open_user_nft_tab()
		    })
		    return false
		})
		return false
	    })
    } catch(e) {
	log_out()
    }
    return false    
}

function open_send_eth_tab () {

    $( ".tab" ).hide() 
    $( "#tab-user-send-eth" ).show()
    $( '.main-menu__link' ).removeClass( 'main-menu__link--active' )

    let is_amount_field_correct     = false
    let is_address_field_correct    = false
    let is_nft_domain_field_correct = false

    document.getElementById( "send-eth__amount"  ).value = ""
    document.getElementById( "send-eth__address" ).value = ""
    document.getElementById( "send-eth__domain"  ).value = ""

    
    function define_send_button_state() {

	document.getElementById( "send-eth__send-button" ).disabled = true
	
	if ( !is_amount_field_correct     ) return
	if ( !is_address_field_correct    ) return
	if ( !is_nft_domain_field_correct ) return

	document.getElementById( "send-eth__send-button" ).disabled = false
	
    }

    
    document.getElementById( "send-eth__amount" ).addEventListener( "input", function () {

	let amount = document.getElementById( "send-eth__amount" ).value
	is_amount_field_correct =  !( isNaN( amount ) || amount <= 0  )

	define_send_button_state()

    })

    
    document.getElementById( "send-eth__address" ).addEventListener( "input", function () {

	document.getElementById( "send-eth__domain" ).value = ""

	is_address_field_correct    = false
	is_nft_domain_field_correct = false

	let address = document.getElementById( "send-eth__address" ).value
	is_address_field_correct = web3.utils.isAddress( address )

	is_nft_domain_field_correct = true
	
	define_send_button_state()

    })

    
    document.getElementById( "send-eth__domain" ).addEventListener( "input", async function () {
	document.getElementById( "send-eth__address" ).value = ""
	is_address_field_correct    = false
	is_nft_domain_field_correct = false
	let domain_name = document.getElementById( "send-eth__domain" ).value
	if (  is_correct_nft_domain_name( domain_name )  ) {
	    let token_id = web3.utils.hexToNumberString(  web3.utils.keccak256( domain_name )  )
	    let address_for_domain = await contract.methods.ownerOf( token_id ).call()
	    let is_nft_domain_exists = address_for_domain !== ZERO_ADDRESS
	    if ( is_nft_domain_exists ) {
		document.getElementById( "send-eth__address" ).value = address_for_domain
		is_address_field_correct    = true
		is_nft_domain_field_correct = true
	    }
	}
	define_send_button_state()
    })

    document.getElementById( "send-eth__send-button" ).addEventListener( "click", function () {
	let amount = document.getElementById( "send-eth__amount" ).value
	let address = document.getElementById( "send-eth__address" ).value
	web3.eth.sendTransaction(  { from: account, to: address, value: web3.utils.toWei( amount, "ether" ) }  )
	    .then( function() {
		open_success_message_tab( "Funds sent" )
	    }).catch( function() {
		open_error_message_tab()
	    }) 
    })

    return false
}

async function open_make_new_nft_tab () {

    $( ".tab" ).hide()
    $( "#tab-user-make-nft" ).show()
    $( "#make-nft-input__domain" ).val("")
    document.getElementById( "make-nft-input__mint-button"         ).disabled = true
    document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
    let mint_fee, approved_sum, paw_balance

    let domain_name 
    
    document.getElementById( "make-nft-input__domain" ).addEventListener( "input", async function () {
	domain_name = $( "#make-nft-input__domain" ).val()
	document.getElementById( "make-nft-input__mint-button" ).disabled = true;
	document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
	if (  !is_correct_nft_domain_name( domain_name )  ) {
	    $( "#make-nft-input__token-id" ).val( "" )
	    return
	}
	let token_id = web3.utils.hexToNumberString(  web3.utils.keccak256( domain_name )  )
	$( "#make-nft-input__token-id" ).val( token_id )
	try {
	    let is_nft_domain_not_exists = await contract.methods.ownerOf( token_id ).call() == ZERO_ADDRESS
	    if ( !is_nft_domain_not_exists ) return
	    mint_fee     = +await minter.methods.get_total_price( domain_name ).call()
	    approved_sum = +await paw.methods.allowance( account, MINTER.address ).call()
	    paw_balance  = +await paw.methods.balanceOf( account ).call()
	    let mint_fee_readable = (mint_fee / 10 ** 18).toFixed( 0 )
	    $( "#make-nft-input__total-price-paw" ).val( mint_fee_readable )

	    if ( (approved_sum >= mint_fee) && (paw_balance >= mint_fee) ) {
		document.getElementById( "make-nft-input__mint-button"         ).disabled = false
		document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
		return
	    }
	    if ( approved_sum < mint_fee && paw_balance > mint_fee ) {
		document.getElementById( "make-nft-input__mint-button"         ).disabled = true
		document.getElementById( "make-nft-input__approve-mint-button" ).disabled = false
		return
	    }
	    document.getElementById( "make-nft-input__mint-button"         ).disabled = true
	    document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
	} catch(e) {
	    document.getElementById( "make-nft-input__mint-button"         ).disabled = true
	    document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
	}
    })

    $( "#make-nft-input__approve-mint-button" ).unbind().click( async function() {
	try {
	    await paw.methods.approve( MINTER.address, mint_fee ).send( {from: account} )
	    document.getElementById( "make-nft-input__mint-button"         ).disabled = false
	    document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
	} catch(e) {
	    document.getElementById( "make-nft-input__mint-button"         ).disabled = true
	    document.getElementById( "make-nft-input__approve-mint-button" ).disabled = true
	}
    });
    
    $( "#make-nft-input__mint-button" ).unbind().click( async function() {
	await minter.methods.mint( domain_name ).send( {from: account} )
	open_user_nft_tab()
    })

    return false
    
}

function open_success_message_tab( header="Operation complete", message="Operation has been successfully done" ) {

    $( ".tab" ).hide()
    $( "#tab-message-success" ).show()
    $( "#message-success__header" ).text( header )
    $( "#message-success__message" ).text( message )
    
}

function open_error_message_tab( header="Operation error", message="An error has been occurred during the operation" ) {

    $( ".tab" ).hide()
    $( "#tab-message-error" ).show()
    $( "#message-error__header" ).text( header )
    $( "#message-error__message" ).text( message )

}

function log_in () {
    
    web3 = new Web3( window.web3.currentProvider )
    // web3 = new Web3( window.ethereum )

    ethereum.enable()
	.then( function( addrs ) {
	    $( '#user-account-menu' ).show()
	    $( '#user-login-menu'   ).hide()
	    account = addrs[ 0 ]
	    contract = new web3.eth.Contract( DAPPLINK.abi, DAPPLINK.address )
	    market   = new web3.eth.Contract( MARKET.abi,   MARKET.address   )
	    paw      = new web3.eth.Contract( PAW.abi,      PAW.address      )
	    minter   = new web3.eth.Contract( MINTER.abi,   MINTER.address   )
	    residue  = new web3.eth.Contract( RESIDUE.abi,  RESIDUE.address  )
	    charity  = new web3.eth.Contract( CHARITY.abi,  CHARITY.address  )
	    update_user_data()
	}).catch( function (e) {
	    log_out()
	})

}

function log_out () {
    
    $( '#user-account-menu' ).hide()
    $( '#user-login-menu'   ).show()
    console.log('how we get here')
}

function update_user_data() {

    web3.eth.getAccounts().then( function ( account_address ) {

	if (  account_address[ 0 ] != account_address  ) throw "Account adress is changed"

	web3.eth.getBalance( account ).then( function ( eth_balance ) {
	    
	    contract.methods.balanceOf( account ).call().then( function ( nft_balance ) {

		paw.methods.balanceOf(account).call().then(function (paw_balance) {

		    let balance_eth = ( +eth_balance / 10**18 ).toFixed( 6 )
		    let balance_nft = nft_balance
		    let balance_paw = ( +paw_balance / 10**18 ).toFixed( 0 )
		    
		    d3.select("#user-account-menu__eth").text( balance_eth )
		    d3.select("#user-account-menu__nft").text( balance_nft )
		    d3.select("#user-account-menu__paw").text( balance_paw )
		    
		    setTimeout( update_user_data, 15 * 1000 )
		})
	    })
	})

    }).catch( function (e) {
	log_out()
    })
    
}

function openTab ( tab ) {
    $( ".tab" ).hide()
    $( ".main-menu__link" ).removeClass( "main-menu__link--active" )
    $( "#main-menu__" + tab ).addClass( "main-menu__link--active" )
    if (  !["www", "dpwa", "art", "apk"].some( x => x == tab )  ) {
	$( "#tab-" + tab ).show()
	return
    }
    $( "#tab-catalogue"       ).show()
    $( "#catalogue__title"    ).text( tab.toUpperCase() )
    $( ".dapplist__container" ).remove()
    let c = catalogue
    for ( let i in c ) {
	if ( c[i].metadata == null ) continue
	if ( c[i].metadata.dapplink.token_type.toLowerCase() !== tab ) continue
	let icon_uri = "http://" + c[i].domain_name + "." + HOST + "/dapplink-icon.png"
	$( "#tab-catalogue" ).append(`<div class="dapplist__container" id="dapplist-${i}">
                                          <div style="background-image: url('${icon_uri}');" class="dapplist__icon"></div>
                                          <div class="dapplist__properties">
                                              <div class="dapplist__name">${ c[i].metadata.properties.name.description }</div>
                                              <div class="dapplist__brief-description">${ c[i].metadata.properties.description.description }</div>
                                           </div>
                                        </div>
       `)// .unbind().click( openCatalogueItem.bind(null, i))
	$( "#dapplist-" + i ).click( openCatalogueItem.bind(null, i))
    }
}

function openShop() {
    $( ".tab").hide()
    $( ".main-menu__link" ).removeClass( "main-menu__link--active" )
    $( "#main-menu__shop" ).addClass( "main-menu__link--active" )
    $( ".sale-item" ).remove()
    $( "#tab-shop" ).show()
    let c = catalogue
    for ( let i in c ) {
	if ( !c[i].price ) continue
	$( "#tab-shop" ).append(`
	    <div class="sale-item">
              <div class="sale-item__properties">
			<div><span class="sale-item__label-domain">Domain:  </span><span class="sale-item__value-domain">${  c[i].domain_name  }</span></div>
			<div><span class="sale-item__label-id">Token ID:</span><span class="sale-item__value-id">${  i  }</span></div>
			<div><span class="sale-item__label-owner">Owner:   </span><span class="sale-item__value-owner">${  c[i].owner  }</span></div>
			<div><span class="sale-item__label-price">Price:   </span><span class="sale-item__value-price">${  c[i].price / 10 ** 18 }</span></div>
		    </div>
                    <div id="sale-item__buttons">
			<button class="button" onclick="buyNFT( '${i}' )">Approve & Buy</buttom>
		    </div>
		</div>
        `);
    }
}

async function buyNFT( token_id ) {
    try {
	const price = await market.methods.pricelist( token_id ).call()
	await paw.methods.approve( MARKET.address, price ).send( {from: account} )
	await market.methods.buy( token_id ).send( {from: account} )
	open_success_message_tab( "Operation complete", "You have successfully bought NFT" )
    } catch( error)  {
	    open_error_message_tab( "Operation error", "An error has been occurred during the operation" )
    }
}

function openCatalogueItem( id ) {
    const c = catalogue[ id ]
    $( ".tab" ).hide()
    $( "#tab-citem" ).show()
    $( ".main-menu__link" ).removeClass( "main-menu__link--active" )
    $( "#citem__title" ).text( c.metadata.properties.name.description )
    let icon_uri = "http://" + c.domain_name + "." + HOST + "/dapplink-icon.png"
    $( "#citem__icon" ).css( "background-image", `url("${icon_uri}")` )
    $( "#citem__brief-description" ).text( c.metadata.properties.description.description )
    if( c.metadata.dapplink.token_type == "APK" ) {
	$( "#citem__button" ).text( 'Install' )
    } else {
	$( "#citem__button" ).text( 'Open' )
    }
    $( "#citem__button" ).unbind().click( function (uri) {
	window.open(uri)
    }.bind(null, c.metadata.properties.image.description))
    for( let i = 0; i <= 9; i++ ) {
	let preview_uri = c.metadata.dapplink[ "preview_" + i ]
	if(  preview_uri == "" ) {
	    $( "#dapp-gallery__item--" + i ).hide()
	    continue
	}
	$( "#dapp-gallery__item--" + i ).show()
	$( "#dapp-gallery__item--" + i ).css( "background-image", `url('${preview_uri}')` )
    }
    let description = c.metadata.dapplink.detailed_description.replace(/(?:\r\n|\r|\n)/g, '<br />')
    $( "#citem__description" ).html( description )
}

function updateCatalogue() {
    $.getJSON( `/list`, function (  _catalogue, status  ) {
	if (status !== 'success') return
	catalogue = _catalogue
    })
    setTimeout( updateCatalogue, 5 * 1000 )
}

function init() {

    $( "#main-menu__home"      ).click(  openTab.bind( null, "home"      )  )
    $( "#main-menu__help"      ).click(  openTab.bind( null, "help"      )  )
    $( "#main-menu__downloads" ).click(  openTab.bind( null, "downloads" )  ) //
    $( "#main-menu__shop"      ).click(  openShop                        ) // 
    $( "#main-menu__www"       ).click(  openTab.bind( null, "www"       )  ) // 
    $( "#main-menu__dpwa"      ).click(  openTab.bind( null, "dpwa"      )  ) // 
    $( "#main-menu__art"       ).click(  openTab.bind( null, "art"       )  ) //
    $( "#main-menu__apk"       ).click(  openTab.bind( null, "apk"       )  ) //

    $( "#user-account-menu__nft" ).click( open_user_nft_tab )
    $( "#user-account-menu__eth" ).click( open_send_eth_tab )
    
    $( "#user-log-in-button" ).click( log_in )

    $( "#user-nft-make-button" ).click( open_make_new_nft_tab )
    
    $( ".tab" ).hide()
    $( "#user-account-menu" ).hide()
    $( "#tab-home" ).show()

    window.onbeforeunload = function() { return false };
    updateCatalogue()
}



init()

