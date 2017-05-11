/**
 * Created by user on 30/12/2016.
 */
var currying = function (fn) {
    var args = [];
    return function () {
        if(arguments.length === 0){
            return fn.apply(this, args);
        }
        else{
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    }
}

var cost = (function () {
    var money = 0;
    return function () {
        for(var i =0, l = arguments,length; i < l; i++){
            money += arguments[i];
        }
        return money;
    }
})();

var cost1 = currying(cost);

cost1(100);
cost1(200);
cost1(300);

console.log(cost());