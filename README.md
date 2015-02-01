# detect-charset 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

Detect character set of file


## Install

```bash
$ npm install --save detect-charset
```


## Usage

```javascript
var detectCharset = require('detect-charset');
var fileBuffer = fs.readFileSync('myfile.txt');
detectCharset(fileBuffer); // "latin1"
```

## Supported Features

### latin1

Any file without a byte order mark or unicode characters will return "latin1".

Valid UTF-8 files without any unicode charaters will return "latin1".

### utf-8

Any file that contains unicode characters but does not have a byte order mark will return UTF-8.

In the future, more advanced character set guessing techniques may be employed, but at the moment all files without a byte order mark are assumed to be UTF-8.

### utf-8-bom

Any file with a UTF-8 byte order mark (`'\xEF\xBB\xBF'`) will return "utf-8-bom".

### utf-16be

Any file with a UTF-16 big-endian byte order mark (`'\xFE\xFF'`) will return "utf-16be".

### utf-16be

Any file with a UTF-16 little-endian byte order mark (`'\xFF\xFE'`) will return "utf-16le".

### utf-32be

Any file with a UTF-32 big-endian byte order mark (`'\x00\x00\xFE\xFF'`) will return "utf-32be".

### utf-32be

Any file with a UTF-32 little-endian byte order mark (`'\x00\x00\xFF\xFE'`) will return "utf-32le".


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## License

Copyright (c) 2015 Trey Hunner. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/detect-charset
[npm-image]: https://badge.fury.io/js/detect-charset.svg
[travis-url]: https://travis-ci.org/treyhunner/detect-charset
[travis-image]: https://travis-ci.org/treyhunner/detect-charset.svg?branch=master
[daviddm-url]: https://david-dm.org/treyhunner/detect-charset.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/treyhunner/detect-charset
[coveralls-url]: https://coveralls.io/r/treyhunner/detect-charset
[coveralls-image]: https://coveralls.io/repos/treyhunner/detect-charset/badge.png
