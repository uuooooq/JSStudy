/**
 * Created by zhudongwei on 30/05/2017.
 */

console.log('this is learn es6 promise simple code.');

// generrator
let fs = require('fs');
// let promise = fs.readFile('test.txt');
//
// promise.then(function (contents) {
//     //完成
//     console.log(contents);
// }, function (err) {
//     console.error(err.message);
// });

// let readfile = new Promise(function (resolve, reject) {
//     let file = fs.readFile('test.txt',(err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//
// })

function readFileP(file) {

    return new Promise(function (resolve, reject) {
        fs.readFile(file,{ encoding: 'utf8' }, function (err, data) {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })

    })

}

readFileP('test.txt').then(function(data){
    console.log(data);
}, function (err) {
    console.error(err);
})