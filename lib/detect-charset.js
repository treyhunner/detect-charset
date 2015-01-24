/*
 * detect-charset
 * https://github.com/treyhunner/detect-charset
 *
 * Copyright (c) 2015 Trey Hunner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(buffer) {
  var hasUnicode = Array.prototype.some.call(buffer, function(character) {
    return (character > 127);
  });
  if (hasUnicode) {
    return 'utf-8';
  } else {
    return 'latin1';
  }
};
