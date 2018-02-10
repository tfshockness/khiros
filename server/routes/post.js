var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
const postServices = require('../services/post.services');

router.get('/', (req, res) => {
    const posts = postServices.getAllPost();
    
    posts.then( allPost => res.status(200).send({success: true, data: allPost}))
         .catch(error => res.status(500).send({success: false, message: error}))
});

router.get('/:id', (req, res) => {
    const post = postServices.getPostById(req.params.id);
    post.then( singlePost => {
        singlePost ? 
        res.status(200).send({success: true, data: singlePost}) : 
        res.status(404).send({success: false, message: "Post not found"});
    
    })
        .catch( error => res.status(500).send({success: false, message: error}));
});

router.post('/', (req, res) => {
    try {
        postServices.addPost(req.body);
    } catch (err) {
        return res.status(403).send({ success: false, message: "err" });
    }

    return res.status(302).send({ success: true });
});

module.exports = router;