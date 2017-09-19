var xpath = require("simple-xpath-position");
var dom = require('xmldom').DOMParser
var select = require("xpath.js");
var old = new dom().parseFromString(`<h1>About <a href="http://thetoolbox.online">TheToolBox</a></h1>

<p><a href="http://thetoolbox.online">TheToolBox</a> is an online website that provides a series of tools that can help students in their study. TheToolBox currently has four sections: Citation, Exam, Timer, Links</p>

<h1>Sections</h1>

<h3>Citation</h3>

<p>Citation section provides two common citation format: <a href="http://www.mla.org/">MLA</a> and <a href="http://www.apa.org/">APA</a>
TheToolBox allows users to submit an URL to generate citation. In addition, TheToolBox also allows its users to modify contents of citations(e.g. users can modify authors&#39; names or pulished date). Moreover, TheToolBox also uses Ajax to ensure the fluency of loading section.</p>

<h3>Exam</h3>

<p>Exam section provides materials related to standardized tests like SAT. In future, we will add more exams to TheToolBox.</p>

<h4>AAAAAP</h4>

<p>The AP part in Exam section contains all the <strong>public</strong> AP test materials on <a href="http://apcentral.collegeboard.com">CollegeBoard AP Central</a>(except for tests about language and culture), including FRQ, Scoring Guidelines, Student Samples, and Students Statistics.
Although we tried to upload all materials, there might be test materials that are not included, if you meet <a href="https://en.wikipedia.org/wiki/HTTP_404">HTTP 404</a> Error, please post the testSDAASDFASD name and test material to the <a href="https://github.com/William-An/ToolBOX-Website/issues">issue page</a>.
All materials are hosted on <a href="https://www.aliyun.com/">Aliyun</a></p>

<h4>SAT</h4>

<p><strong>No test materials</strong>
This section has a list of links that we think are helpful for students:
<em> <a href="https://www.collegeboard.org/">CollegeBoard Official Site</a>
</em> <a href="https://collegereadiness.collegeboard.org/sat?navid=gh2-sat">SAT Home Link</a>
<em> <a href="https://collegereadiness.collegeboard.org/sat/scores/understanding-scores/sat-score-converter">SAT Score Converter</a>
</em> <a href="https://www.khanacademy.org/sat">Khan Academy</a>
* <a href="http://www.act.org/content/act/en.html">Transfer to ACT</a></p>

<h3>Timer</h3>

<p>Timer section provides a simple countdown timer for users to schedule their time.
Timer section allows users to moASDFADSFASDdify their task name and task duration. When time is up, it will also play &quot;beep&quot; sound to inform users.</p>

<h3>AP Lang</h3>

<p>This section is made to get assistance to those who take AP Language and Composition. It contains quick links to some note websites that host explanation to literature work. This section also contains links to websites like &quot;Literary Devices&quot; or &quot;Rhymer&quot; which are useful for AP Language students.</p>

<h3>Links</h3>

<p>There are four parts under this sectioASDFSDFn: Programmers，Academic，Tools, and related websites</p>

<h1>Error</h1>

<p>If you meet errors, plese mail [China<em>Aisa@live.com](mailto:China</em>Aisa@live.com) or post them on <a href="https://github.com/William-An/ToolBOX-Website/issues">issue</a> page。</p>

<h1>Acknowledge</h1>

<p><a href="http://html5up.net/">HTML5UP</a>                -&gt; <a href="https://html5up.net/assets/css/images/placeholder.png">Stellar</a>Template<br/><a href="https://github.com/malsup">Malsup</a>            -&gt; <a href="http://jquery.malsup.com/form/#api">jQuery Form Plugin</a><br/><a href="mailto:me578022@gmail.com">S.C. Chen</a>     -&gt; <a href="http://simplehtmldom.sourceforge.net/">PHP Parser</a>  </p>

<h1>Contact</h1>

<p>E-Mail: [China<em>Aisa@live.com](mailto:China</em>Aisa@live.com)<br/>Github: <a href="https://github.com/William-An">William-An</a><br/>TheXYZLab: <a href="http://william-an.xyz">Official Site</a> | <a href="https://github.com/TheXYZLAB">Github Organization</a>  </p>

<p>2017/05/24 v1.0.0<br/>2017/06/01 v1.1.0<br/>2017/06/13 v2.0.0<br/>© 2017 TheXYZLab</p>
`);
var sec = new dom().parseFromString(`<h1>About <a href="http://thetoolbox.online">TheToolBox</a></h1>

<p><a href="http://thetoolbox.online">TheToolBox</a> is an online website that provides a series of tools that can help students in their study. TheToolBox currently has four sections: Citation, Exam, Timer, Links</p>

<h1>Sections</h1>

<h3>Citation</h3>

<p>Citation section provides two common citation format: <a href="http://www.mla.org/">MLA</a> and <a href="http://www.apa.org/">APA</a>
TheToolBox allows users to submit an URL to generate citation. In addition, TheToolBox also allows its users to modify contents of citations(e.g. users can modify authors&#39; names or pulished date). Moreover, TheToolBox also uses Ajax to ensure the fluency of loading section.</p>

<h3>Exam</h3>

<p>Exam section provides materials related to standardized tests like SAT. In future, we will add more exams to TheToolBox.</p>

<h4>AP</h4>

<p>The AP part in Exam section contains all the <strong>public</strong> AP test materials on <a href="http://apcentral.collegeboard.com">CollegeBoard AP Central</a>(except for tests about language and culture), including FRQ, Scoring Guidelines, Student Samples, and Students Statistics.
Although we tried to upload all materials, there might be test materials that are not included, if you meet <a href="https://en.wikipedia.org/wiki/HTTP_404">HTTP 404</a> Error, please post the test name and test material to the <a href="https://github.com/William-An/ToolBOX-Website/issues">issue page</a>.
All materials are hosted on <a href="https://www.aliyun.com/">Aliyun</a></p>

<h4>SAT</h4>

<p><strong>No test materials</strong>
This section has a list of links that we think are helpful for students:
<em> <a href="https://www.collegeboard.org/">CollegeBoard Official Site</a>
</em> <a href="https://collegereadiness.collegeboard.org/sat?navid=gh2-sat">SAT Home Link</a>
<em> <a href="https://collegereadiness.collegeboard.org/sat/scores/understanding-scores/sat-score-converter">SAT Score Converter</a>
</em> <a href="https://www.khanacademy.org/sat">Khan Academy</a>
* <a href="http://www.act.org/content/act/en.html">Transfer to ACT</a></p>

<h3>Timer</h3>

<p>Timer section provides a simple countdown timer for users to schedule their time.
Timer section allows users to modify their task name and task duration. When time is up, it will also play &quot;beep&quot; sound to inform users.</p>

<h3>AP Lang</h3>

<p>This section is made to get assistance to those who take AP Language and Composition. It contains quick links to some note websites that host explanation to literature work. This section also contains links to websites like &quot;Literary Devices&quot; or &quot;Rhymer&quot; which are useful for AP Language students.</p>

<h3>Links</h3>

<p>There are four parts under this section: Programmers，Academic，Tools, and related websites</p>

<h1>Error</h1>

<p>If you meet errors, plese mail [China<em>Aisa@live.com](mailto:China</em>Aisa@live.com) or post them on <a href="https://github.com/William-An/ToolBOX-Website/issues">issue</a> page。</p>

<h1>Acknowledge</h1>

<p><a href="http://html5up.net/">HTML5UP</a>                -&gt; <a href="https://html5up.net/assets/css/images/placeholder.png">Stellar</a>Template<br/><a href="https://github.com/malsup">Malsup</a>            -&gt; <a href="http://jquery.malsup.com/form/#api">jQuery Form Plugin</a><br/><a href="mailto:me578022@gmail.com">S.C. Chen</a>     -&gt; <a href="http://simplehtmldom.sourceforge.net/">PHP Parser</a>  </p>

<h1>Contact</h1>

<p>E-Mail: [China<em>Aisa@live.com](mailto:China</em>Aisa@live.com)<br/>Github: <a href="https://github.com/William-An">William-An</a><br/>TheXYZLab: <a href="http://william-an.xyz">Official Site</a> | <a href="https://github.com/TheXYZLAB">Github Organization</a>  </p>

<p>2017/05/24 v1.0.0<br/>2017/06/01 v1.1.0<br/>2017/06/13 v2.0.0<br/>© 2017 TheXYZLab</p>
`);
function nodelist2arr(ndlist){
    var res = new Array();
    // ndlist yield more than length!!!
    for(var i = 0; i < ndlist.length; i++){
        res = res.concat(new Array(ndlist[i]));
    }
    return res;
}
function toXpath(html){
    var nodeArr = nodelist2arr(html.childNodes);
    var result = new Array();
    for(var i = 0; i < nodeArr.length; i++){
    	try{
	        result = result.concat(new Array(xpath.fromNode(nodeArr[i],html)));
	        nodeArr = nodeArr.concat(nodelist2arr(nodeArr[i].childNodes));
	    }
	    catch(err){// Ignore nodes without childNodes}
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
function getContent(pathes,doc){
    var result = new Array();
    for(var i = 0; i < pathes.length; i++){
     //   select(doc,pathes[i])[]
    }
}
// Char_sum
function differ(first,second){
    xfst = toXpath(first);
    xsec = toXpath(sec);
    var equal = new Array();
    // Diff
    xfst.forEach(function(item,index){
        var result = xsec.find(function(pat){
            // Existed node but not Text content
            if(pat == this&&pat.search("text()")<0)
                return true;
            else if(pat == this&&pat.search("text()")>-1)
                return select(first,pat)[0].data == select(second,pat)[0].data; // Compare text content
        },item);
        if(result != undefined)
            equal = equal.concat(new Array(result));
    });
    var deleted = xfst.filter(filter,equal);
    var added = xsec.filter(filter,equal);
   // console.log(select(first,deleted[0])[0].data);
    return {equal:equal,deleted:deleted,added:added};
}

console.log(differ(old,sec));