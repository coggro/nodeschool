var sum = 0;
var i = 2;

for (i = 2; i <= process.argv.length-1; ++i){
    sum += parseInt(process.argv[i]);
}

console.log(sum);
