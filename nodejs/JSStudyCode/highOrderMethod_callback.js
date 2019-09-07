/**
 * Created by user on 30/12/2016.
 */
// 作为参数传递
var getUserInfo = function (userId, callback) {
    if(typeof callback === 'function'){
        callback('this a value'+userId);
    }
}

getUserInfo(123344,function(data){
    console.log('------------'+data);
})