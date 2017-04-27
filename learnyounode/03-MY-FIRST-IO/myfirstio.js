var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);

var fileArray = fileBuffer.toString().split('\n');

console.log(fileArray.length-1);
