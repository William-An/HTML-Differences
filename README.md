# HTML_Differences
Use XPath and xmlDOM to locate deleted or new HTML Node from string.

## Usage
    var differ = require("html-differences").differ;
    var first = "<p>Helloword</p>";
    var second = "<p>Hello<em>word</em></p>";
    var result = differ(first, second);
    /**
    * result = {
    *	equal:[{path:path,content:content},...],
    *	deleted:[{path:path,content:content},...],
    *	added:[{path:path,content:content},...],
    * }
    */

## TODO
1. Count HTML attributes