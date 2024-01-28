const mongoose = requie('mongoose');
const Schema = mongoose.Schema ;

const PostSchema = newSchema({
  title:String,
  price:String,
  description:String,
  images:[String],
  location:String,
  lat:Number,
  lng:Number,
  author: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  reviews:[
    {
        type:Schema.Types.objectId,
        ref: 'Review'
    }
  ] 
});

module.exports = mongoose.model('Post', PostSchema);
