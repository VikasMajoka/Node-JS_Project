const mongoose = requie('mongoose');
const passportLocalMongoose =require('passport-local-mongoose');
const Schema = mongoose.Schema ;

const UserSchema = newSchema({
  email:string,
  image:string,
  posts:[
    {
        type:Schema.Types.objectId,
        ref: 'Post'
    }
  ] 
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

