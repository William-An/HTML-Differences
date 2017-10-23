var TEST_STRING = "<p class='A'>First Test</p><p></p>";
var TEST_STRING_EDITED = "<p class='B'>Second Test</p><p></p>";
var EXPECT_OUTCOME = new Object({ 
	equal: 
		[ 
			{ 
				path: '/p[2]', content: undefined, attributes: [] 
			} 
		],
  	deleted: 
  		[ 
  			{ 
  				path: '/p[1]', content: undefined, attributes: [{ name: 'class', value: 'A' }] 
  			},
     		{ 
     			path: '/p[1]/text()[1]', content: 'First Test', attributes: [] 
     		} 
 		],
  	added:
  		[ 
  			{ 
  				path: '/p[1]', content: undefined, attributes: [{ name: 'class', value: 'B' }]
  			},
  			{ 
  				path: '/p[1]/text()[1]', content: 'Second Test', attributes: [] 
  			} 
		] 
	})
module.exports = {TEST_STRING, TEST_STRING_EDITED, EXPECT_OUTCOME}