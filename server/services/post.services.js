var postRepository = require('../repository/post.repository');



module.exports = {
    addPost({ title, subtitle, category, text, image, status = 'rascunho', publishedAt = Date.now() }){

        return postRepository.add({title, subtitle, text, image, status, publishedAt});

    },
    getAllPost(){
       return postRepository.getAll();
    },
    getPostById(id){
        return postRepository.getById(id);
    }
}