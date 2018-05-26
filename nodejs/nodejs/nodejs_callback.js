var fs = require("fs");
var data = fs.readFileSync('./nodejs/nodejs/input.txt');

console.log(data.toString());
console.log("程序执行结束");