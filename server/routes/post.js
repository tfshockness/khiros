var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
const postRules = require('../rules/post.rules');

router.post('/', (req, res, next) => {

   try {
    postRules.add(req.body);
   } catch(error) {
       console.log(error);
       res.status(500).send({sucess: false, message: error});
   }

    res.status(302).send({sucess: true });
});

module.exports = router;