var Post = require('../models/post.model');

module.exports = {
    add({ title, subtitle, category, text, image, status, publishedAt }) {
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

        newPost.save(err => {
            if (err) throw err;
        })
    },
    getAll() {
        return Post.find();
    },
    getById(id){
        return Post.findById(id)
    }
}