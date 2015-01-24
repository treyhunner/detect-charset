'use strict';

var detectCharset = require('../');
var assert = require('should');
var fs = require('fs');
var path = require('path');

function getFixture(fixture) {
  return fs.readFileSync(path.join(__dirname, 'fixtures', fixture));
}

describe('detectCharset', function () {

  it('should return latin1 for non-unicode files', function () {
    assert.equal(detectCharset(getFixture('latin1.txt')), 'latin1');
  });

  it('should return utf-8 for files with unicode', function () {
    assert.equal(detectCharset(getFixture('utf-8-with-unicode.txt')), 'utf-8');
  });

});
