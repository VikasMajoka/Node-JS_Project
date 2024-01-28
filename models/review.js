const mongoose = requie('mongoose');
const Schema = mongoose.Schema ;

const ReviewSchema = newSchema({
  body:String,

  author: {
    type:Schema.Types.ObjectId,
    ref:'user'
  }
     
});

module.exports = mongoose.model('Review', ReviewSchema);

