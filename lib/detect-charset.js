/*
 * detect-charset
 * https://github.com/treyhunner/detect-charset
 *
 * Copyright (c) 2015 Trey Hunner
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

var utf8bom = '\xEF\xBB\xBF';

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
  if (hasBOM(buffer, utf8bom)) {
    return 'utf-8-bom';
  } else if (hasUnicode) {
    return 'utf-8';
  } else {
    return 'latin1';
  }
};
