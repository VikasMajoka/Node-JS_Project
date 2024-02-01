modules.export={
    errorHandler:(fn)=>
        (req, res, next)=>{
            promise.resolve(fn(req, res, next))
                       .catch(next);

        }
    }
