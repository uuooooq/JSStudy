'use strict';

console.log('hello world');
let testValue = 7;

function countBits(inputValue){
    var count = 0;
    while(inputValue != 0){
        inputValue = inputValue & (inputValue-1);
        count++;
    }
    return count;
}
var countBitValue = countBits(testValue);
console.log('count number is: '+countBitValue);

if(countBitsDict[countBitValue]){

    countBitsDict.push(testValue);
    
}
else{
    countBitsDict[countBitValue] = new Array(testValue)
}
