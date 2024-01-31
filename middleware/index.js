modules.export={
    errorHandler:function(fn){
        (req, res, next)=>{
            promise.resolve(fn(req, res, next))
                       .catch(next);

        }
    }
}