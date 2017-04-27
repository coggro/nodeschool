var fs = require('fs'), path = require('path');

// Print a list of files in a given directory, filtered by extension
// Provided directory name as first arg (process.argv[2]) and an extension
//   as the second arg (process.argv[3]), not prefixed with '.'
// Print list one file per line, use async i/o

fs.readdir(process.argv[2], filterList);

function filterList(err, list) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i <= list.length; ++i) {
			if(path.extname(list[i]) == '.' + process.argv[3]) {
				console.log(list[i]);
			}
		}
	}
}
