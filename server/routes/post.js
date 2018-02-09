var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
const postRules = require('../rules/post.rules');

router.post('/', (req, res, next) => {

   try {
    postRules.addPost(req.body);
   } catch(err) {
       return res.status(403).send({sucess: false, message: err});
   }

    res.status(302).send({sucess: true });
});

module.exports = router;