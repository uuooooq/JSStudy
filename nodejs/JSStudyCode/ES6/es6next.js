/**
 * Created by zhudongwei on 25/12/2016.
 */
function* f(){
    for(var i=0; true; i++){
        var reset = yield i;
        if(reset){
            i = -1;
        }
    }
}

var g = f();

g.next();
g.next();
g.next(true);