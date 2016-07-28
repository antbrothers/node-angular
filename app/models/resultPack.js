function bindErrorhandle(fn){
    return function(next,cb){
        fn(function(err,ret){
            if(err) next(err);
            else cb(ret);
        });
    }
}

function getData(cb){
    cb(null,"data");
}
getData=bindErrorhandle(getData);

exports.result=getData;