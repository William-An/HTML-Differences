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
    for(var i = 0; i < ndlist.length; i++){
        res = res.concat(new Array(ndlist[i]));
    }
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
        if(content != undefined)
            result = result.concat(new Array({path:pathes[i],content:content}));
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
            // Existed node but not Text content
            if(pat == this && pat.search("text()")<0)
                return true;
            else if(pat == this && pat.search("text()")>-1)
                return select(first,pat)[0].data == select(second,pat)[0].data; // Compare text content
        },item);
        if(result != undefined)
            equal = equal.concat(new Array(result));
    });
    var deleted = xfst.filter(filter,equal);
    var added = xsec.filter(filter,equal);
    return {equal:getContent(equal,first),deleted:getContent(deleted,first),added:getContent(added,second)};
}

module.exports.differ = differ;