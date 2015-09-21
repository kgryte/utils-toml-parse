/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FIXTURES //

var fixture,
	fpath;

fpath = path.join( __dirname, 'fixtures', 'config.toml' );
fixture = fs.readFileSync( fpath, {
	'encoding': 'utf8'
});


// TESTS //

describe( 'utils-toml-parse', function tests() {

	it( 'should export a function', function test() {
		expect( parse ).to.be.a( 'function' );
	});

	it( 'should return an error if not provided a valid value to parse', function test() {
		var values,
			i;

		values = [
			5,
			null,
			NaN,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.isTrue( parse( values[i] ) instanceof Error, values[i] );
		}
	});

	it( 'should return an error if unable to parse a provided value', function test() {
		var err = parse( 'value: beep/boop ...[]' );
		assert.isTrue( err instanceof SyntaxError );
	});

	it( 'should correctly parse a TOML file and return an object', function test() {
		var out = parse( fixture );
		assert.deepEqual( out, {
			'port': 7331,
			'address': '127.0.0.1'
		});
	});

});
