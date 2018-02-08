var Post = require('../models/post.model');

module.exports = {
    add({ title, subtitle, category, text, image, status = 'rascunho', publishedAt = Date.now() }){

        let newPost = new Post(
            {
                title,
                subtitle,
                category,
                text,
                image,
                status,
                publishedAt
            });
           
                newPost.save( err => {
                    if(err) throw err;
                })

    }
}