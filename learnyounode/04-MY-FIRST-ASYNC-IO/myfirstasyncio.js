// Import fs module into fs variable
var fs = require('fs');

// Use async readFile function with file, encoding, and callback args
fs.readFile(process.argv[2], 'utf8', function doneReading(err, data) {
	if(err) {
		// if an error occurs, log the error to the console
		console.log(err)
	} else {
		// Otherwise, split the String into an array called 'lines' and log
		//   its length - 1 to the console
		var lines = data.split('\n');
		console.log(lines.length-1);
	}
});
