# HTML-Differences
[![NPM](https://nodei.co/npm/html-differences.png)](https://nodei.co/npm/html-differences/)

[![npm](https://img.shields.io/npm/dw/html-differences.svg)](https://www.npmjs.com/package/html-differences) [![GitHub stars](https://img.shields.io/github/stars/badges/HTML-Differences.svg?style=social&label=Star&style=flat-square)](https://github.com/William-An/HTML-Differences) [![npm](https://img.shields.io/npm/l/html-differences.svg)](https://opensource.org/licenses/MIT)[![Travis](https://img.shields.io/travis/William-An/HTML-Differences.svg)](https://travis-ci.org/William-An/HTML-Differences)

Use XPath and xmlDOM to locate deleted or new HTML Node from string.


## Usage
    var differ = require("html-differences").differ;
    var first = "<p>Helloworld</p>";
    var second = "<p>Hello<em>world</em></p>";
    var result = differ(first, second);
    /**
    * result = {
    *	equal:[{
    *           path:XPath,
    *           content:content,
    *           attributes:attributes},
    *           ...],
    *	deleted:[{
    *             path:XPath,
    *             content:content,
    *             attributes:attributes
    *            },
    *             ...],
    *	added:[{
    *           path:XPath,
    *           content:content,
    *           attributes:attributes
    *           },
    *           ...],
    * }
    *   attributes:{name:attribute_name,value:attribute_value}
    *   e.g.: attribute:{name:'class',value:'button'}
    */
