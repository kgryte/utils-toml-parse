'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	toml = require( 'toml' );


// PARSE //

/**
* FUNCTION: parse( value )
*	Attempts to parse a value as TOML.
*
* @param {String} value - value to parse
* @returns {Object|Error} parsed value or an error
*/
function parse( value ) {
	var err;
	if ( !isString( value ) ) {
		return new TypeError( 'invalid input argument. Must provide a string primitive. Value: `' + value + '`.' );
	}
	try {
		return toml.parse( value );
	} catch ( error ) {
		err = error.message;
		err += ' Line: '+error.line+'.';
		err += ' Column: '+error.column+'.';
		return new SyntaxError( err );
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
