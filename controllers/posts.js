const Post = require('../models/post');

module.exports = {
   //posts index
 async getPosts (req ,res ,next) {
    let posts = await Post.find({});
    res.render('posts/index',{ posts })
 },
 //Posts new
 newPost(req ,res , next){
   res.render('posts/new')
 }
}