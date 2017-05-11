/**
 * Created by user on 26/12/2016.
 */
// // 定义生成器函数
// function *enumerable(msg){
//     console.log(msg)
//     console.log('----------------- msg');
//     var msg1 = yield msg + '  after '
//     console.log(msg1)
//     var msg2 = yield msg1 + ' after'
//     try{
//         var msg3 = yield msg2 + 'after'
//         console.log('ok')
//     }
//     catch(e){
//         console.log(e)
//     }
//     console.log(msg2 + ' over')
// }
//
// // 初始化迭代器
//
// var enumerator = enumerable('hello')
// //debugger;
// var ret = enumerator.next() // 控制台显示 hello，ret的值{value:'hello after',done:false}
// ret =  enumerator.next('world') // 控制台显示 world，ret的值{value:'world after',done:false}
// ret = enumerator.next('game') // 控制台显示game，ret的值{value:'game after',done:false}
// // 抛出异常信息
// //ret = enumerator.throw(new Error('test')) // 控制台显示new Error('test')信息，然后显示game over。ret的值为{done:true}
//
// // for...of语句
// enumerator = enumerable('hello')
// for(ret of enumerator)
//     console.log(JSON.stringify(ret));
// // 控制台依次显示
// // hello
// // {value:'hello after',done:false}
// // world
// // {value:'world after',done:false}
// // {value:'game after',done:false}
// // game over
// // {done:true}


function* quips(name) {
    yield "hello " + name + "!";
    yield "i hope you are enjoying the blog posts";
    if (name.startsWith("X")) {
        yield "it's cool how your name starts with X, " + name;
    }
    yield "see you later!";
}

var iter = quips('whoami');
var value1 = iter.next();
console.log('value is '+value1.value);
var value2 = iter.next();
console.log('value is '+value2.value);