/*
 * detect-charset
 * https://github.com/treyhunner/detect-charset
 *
 * Copyright (c) 2015 Trey Hunner
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

var bom = {
  'utf-8': '\xEF\xBB\xBF',
  'utf-16be': '\xFE\xFF',
  'utf-16le': '\xFF\xFE',
};

function hasBOM(buffer, bom) {
  var bufferBeginning = buffer.slice(0, bom.length);
  return _.every(bufferBeginning, function (charByte, index) {
    return bom.charCodeAt(index) === charByte;
  });
}

module.exports = function(buffer) {
  var hasUnicode = Array.prototype.some.call(buffer, function(character) {
    return (character > 127);
  });
  if (hasBOM(buffer, bom['utf-8'])) {
    return 'utf-8-bom';
  } else if (hasBOM(buffer, bom['utf-16be'])) {
    return 'utf-16be';
  } else if (hasBOM(buffer, bom['utf-16le'])) {
    return 'utf-16le';
  } else if (hasUnicode) {
    return 'utf-8';
  } else {
    return 'latin1';
  }
};
