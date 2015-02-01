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

  it('should return utf-8-bom for files with a BOM', function () {
    assert.equal(detectCharset(getFixture('utf-8-bom.txt')), 'utf-8-bom');
  });

  it('should return utf-16be for appropriate BOM files', function () {
    assert.equal(detectCharset(getFixture('utf-16be.txt')), 'utf-16be');
  });

  it('should return utf-16le for appropriate BOM files', function () {
    assert.equal(detectCharset(getFixture('utf-16le.txt')), 'utf-16le');
  });

  it('should return utf-32be for appropriate BOM files', function () {
    assert.equal(detectCharset(getFixture('utf-32be.txt')), 'utf-32be');
  });

  it('should return utf-32le for appropriate BOM files', function () {
    assert.equal(detectCharset(getFixture('utf-32le.txt')), 'utf-32le');
  });

});
