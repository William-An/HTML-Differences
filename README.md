# HTML_Differences
Use XPath and xmlDOM to locate deleted or new HTML Node from string.

## Usage
    var differ = require("html-differences").differ;
    var first = "<p>Helloword</p>";
    var second = "<p>Hello<em>word</em></p>";
    var result = differ(first, second);
    /**
    * result = {
    *	equal:[{path:path,
    *           content:content,
    *           attributes:attributes},
    *           ...],
    *	deleted:[{path:path,
    *             content:content,
    *             attributes:attributes},
    *             ...],
    *	added:[{path:path,
    *           content:content,
    *           attributes:attributes},
    *           ...],
    * }
    *   Attributes: https://github.com/jindw/xmldom
    */