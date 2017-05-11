/**
 * Created by user on 30/11/2016.
 */
var s = Symbol();
console.log(typeof s) ;

// Proxy

var plain = {
    name : "hubwiz"
};

var proxy = new Proxy(plain,{
    get: function (target, property) {
        return property in target ? target[property] : '汇智网';
    }
});

proxy.name;
proxy.title;

console.log(proxy.name);
console.log(proxy.title);


// 箭头函数

var array = [1, 2, 3];

//传统写法
array.forEach(function (v, i, a) {
    console.log('-------------'+v);
});

//ES6
array.forEach(v => console.log(v));

var evens = [1,2,3,4,5];
var fives = [];

// 表达式体
var odds = evens.map(v => v+1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// 语句体
nums.forEach(v => {
    if( v % 5 === 0)
        fives.push(v);
});

console.log('------------'+fives);

var bob = {
    _name:'Bob',
    _friends:['Amy','Bob','Cinne','Dylan','Ellen'],
    printFriends(){
        this._friends.forEach( f => console.log(this._name + ' knows '+f));
    }
}

bob.printFriends();