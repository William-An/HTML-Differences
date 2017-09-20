# HTML_Differences
[![NPM](https://nodei.co/npm/html-differences.png)](https://nodei.co/npm/html-differences/)
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
    *           attributes:
    *           },
    *           ...],
    * }
    *   attributes:{name:attribute_name,value:attribute_value}
    */