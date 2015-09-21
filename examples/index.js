'use strict';

var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( './../lib' );

// Load a TOML file...
var filepath,
	file;

filepath = path.resolve( __dirname, '../test/fixtures/config.toml' );
file = fs.readFileSync( filepath, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
