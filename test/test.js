const assert = require('assert');
const should = require('should');
const {TEST_STRING, TEST_STRING_EDITED, EXPECT_OUTCOME} = require('./params.js');

describe('HTML-Differences', function(){
	const differ = require('../index').differ;
	describe('#differ()', function(){
		var result = differ(TEST_STRING, TEST_STRING_EDITED);
		it('Equal elements', function(){
			result.equal.should.be.eql(EXPECT_OUTCOME.equal);
		});
		it('Deleted elements', function(){
			result.deleted.should.be.eql(EXPECT_OUTCOME.deleted);
		});
		it('Added elements', function(){
			result.added.should.be.eql(EXPECT_OUTCOME.added);
		});
	})
})