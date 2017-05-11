/**
 * Created by user on 26/12/2016.
 */
var str   = '{"name":"anderson","age":"20","sex":"male"}';
var  jsonObj = JSON.parse(str);
var result = a(15);

console.log(result);
console.log(jsonObj);
console.log(typeof  jsonObj);
debugger;
function a(num){
    var str = "";
    if(num < 10){
        str = "num 小于10 ";
    } else {
        str = "num 大于10 ";
    }
    return str;
}