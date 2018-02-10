var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
const postServices = require('../services/post.services');

router.post('/', (req, res, next) => {

   try {
    postServices.addPost(req.body);
   } catch(err) {
       return res.status(403).send({sucess: false, message: err});
   }

    res.status(302).send({sucess: true });
});

module.exports = router;