/**
 * Created by user on 10/11/2016.
 */
var arr = [1,3,5,7,9];
var newarr = arr.reduce(function (x,y) {
    return x+y;
});

console.log('------- '+newarr);