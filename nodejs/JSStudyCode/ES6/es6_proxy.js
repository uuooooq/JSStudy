/**
 * Created by zhudongwei on 27/05/2017.
 */
// let value = 'hello';
// let str = `${value} world`;
// console.log('----'+str);
//
// var target = {}, handler = {};
// var proxy = Proxy(target, handler);
// proxy.color = 'pink';

// let dataStore = {
//     name: 'Billy Bob',
//     age: 15
// };
// let handler = {
//     get(target, key, proxy) {
//         const today = new Date();
//         console.log(`GET request made for ${key} at ${today}`);
//         return Reflect.get(target, key, proxy);
//     }
// }
// dataStore = new Proxy(dataStore, handler);
// // This will execute our handler, log the request, and set the value of the `name` variable.
// const name = dataStore.name;
// console.log('--name is '+name);

// Define a validator that takes custom validators and returns a proxy
function createValidator(target, validator) {
    return new Proxy(target, {
        _validator: validator,
        set(target, key, value, proxy) {
            if (target.hasOwnProperty(key)) {
                let validator = this._validator[key];
                if (!!validator(value)) {
                    console.log('------------- value:'+value);
                    return Reflect.set(target, key, value, proxy);
                } else {
                    throw Error(`Cannot set ${key} to ${value}. Invalid.`);
                }
            } else {
                // prevent setting a property that isn't explicitly defined in the validator
                throw Error(`${key} is not a valid property`)
            }
        }
    });
}
// Now, just define validators for each property
const personValidators = {
    name(val) {
        return typeof val === 'string';
    },
    age(val) {
        let v = typeof val;
        return typeof val === 'number' && val > 18;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        return createValidator(this, personValidators);
    }
}
const bill = new Person('Bill', 25);
// all of these throw an error
// bill.name = 0;
// bill.age = 'Bill';
// bill.age = 15;
//bill.age = 28;
let numvalue = 28;
bill.name='hello';
bill.age = numvalue;


let target = {};
let proxy = new Proxy(target,{});
proxy.name = 'proxy';
console.log(proxy.name);
console.log(target.name);