const user =  require('../models/user');
module.exports = {
    postRegister(req , res , next){
        user.register(new user({username: req.body.username}), req.body.password, (err) => {
            if (err) {
              console.log('error while user register!', err);
              return next(err);
            }
        
            console.log('user registered!');
        
            res.redirect('/');
          });      
    }
}
