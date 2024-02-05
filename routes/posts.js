const express = require('express');
const router = express.Router();
const{ asyncErrorhandler }= require('../middleware/');
const { 
  postIndex , 
  postNew , 
  postCreate ,
 postShow ,
  postEdit
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', asyncErrorhandler(postIndex) );

/* GET posts new /posts/new */
router.get('/new', postNew);

  module.exports = router;

  /* POSTS posts create /posts */
router.post('/', asyncErrorhandler(postCreate));

  /* GET posts show /posts/:id */
router.get('/:id', asyncErrorhandler(postShow));

  /* GET posts edit /posts/:id/edit */
router.get('/:id/edit', asyncErrorhandler(postEdit));

  /* PUT posts update /posts/id: */
router.put('/:id', (req, res, next)=> {
    res.send('UPDATE /posts/posts/:id');
  }); 

  /* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next)=> {
    res.send('DELETE /posts/:id');
  });

 