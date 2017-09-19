var xpath = require("simple-xpath-position");
var dom = require('xmldom').DOMParser;
var select = require("xpath.js");

/**
* @param {NodeList} ndlist
* @return {Array}
*/
function nodelist2arr(ndlist){
    var res = new Array();
    // ndlist yield more than length!!!
    try{
        for(var i = 0; i < ndlist.length; i++){
            res = res.concat(new Array(ndlist[i]));
        }
    }
    catch(err){}
    return res;
}

/**
* @param {Document} html
* @return {Array}
*/
function toXpath(html){
    var nodeArr = nodelist2arr(html.childNodes);
    var result = new Array();
    for(var i = 0; i < nodeArr.length; i++){
    	try{
	        result = result.concat(new Array(xpath.fromNode(nodeArr[i],html)));
	        nodeArr = nodeArr.concat(nodelist2arr(nodeArr[i].childNodes));
	    }
	    catch(err){/*Ignore nodes without childNodes*/}
    }
    return result;
}

function filter(item){
    for(var i = 0; i < this.length; i++){
            if(this[i] == item)
                return false;
        }
        return true;
}

/**
* @param {Array} pathes
* @param {Document} doc 
* @return {Array}
*/
function getContent(pathes,doc){
    var result = new Array();
    for(var i = 0; i < pathes.length; i++){
        var content = select(doc,pathes[i])[0].data;
        var attributes = nodelist2arr(select(doc,pathes[i])[0].attributes).filter(function(item){return item.nodeValue && item.nodeName});  // Nodes which have attributes
        result = result.concat(new Array({path:pathes[i],content:content,attributes:attributes}));
    }
    return result;
}

/**
* @param {String} first
* @param {String} second
* @return {Object}
*/
function differ(first,second){
    var first = new dom().parseFromString(first);
    var second = new dom().parseFromString(second)
    xfst = toXpath(first);
    xsec = toXpath(second);
    var equal = new Array();
    // Diff
    xfst.forEach(function(item,index){
        var result = xsec.find(function(pat){
            if(pat == this){
                // Compare attributes, if one is not consistent, deleted
                var firstAttr = nodelist2arr(select(first,pat)[0].attributes);
                var secondAttr = nodelist2arr(select(second,pat)[0].attributes);
                // No attributes
                if(secondAttr.length == 0 && firstAttr.length == 0)
                    return true;
                var i = firstAttr.some(function(item){
                    return this.some(function(item){
                        // test for nodeValue and nodeName
                        // If the another document has the same attributes
                        // item here is the item in this
                        // this here is the item
                        return item.nodeValue == this.nodeValue && item.nodeName == this.nodeName;
                    },item);
                },secondAttr);
                if(pat.search("text()")<0)
                    // No Text content
                    return i;
                else if(pat.search("text()")>-1){
                    var content = select(first,pat)[0].data == select(second,pat)[0].data; // Compare text content
                    return content && i;
                }
            }
        },item);
        if(result != undefined)
            equal = equal.concat(new Array(result));
    });
    var deleted = xfst.filter(filter,equal);
    var added = xsec.filter(filter,equal);
    return {equal:getContent(equal,first),deleted:getContent(deleted,first),added:getContent(added,second)};
}
// console.log(differ("<p class='aa'>Hellow</p><p></p>","<p class='12'>Hellow</p><p></p>"))
module.exports.differ = differ;