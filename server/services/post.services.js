var postRepository = require('../repository/post.repository');
const { postForm } = require('../lookup/validationMessages');
//Find a way to move the Validation for its own component.
//Posting the data to the database and checking validation in the same component
//hurt the single responsibilty principle.

module.exports = {
    addPost({ title, subtitle, category, text, image, status = 'rascunho', publishedAt = Date.now() }){
        let error = [];
        if(typeof(title) !== "string" || title.trim().length < 1) error.push(postForm.title.pt);
        if(typeof(subtitle) != "string" || subtitle.trim().length < 1) error.push(postForm.subtitle.pt);
        if(typeof(text) != "string" || text.trim().length < 1) error.push(postForm.text.pt);
        if(typeof(image) != "string" || image.trim().length < 1) error.push(postForm.image.pt);
        if(typeof(status) != "string" || status.trim().length < 1) error.push(postForm.status.pt);
        //I dont know what is the type that I will put for publishedAt
        if(error.length > 0) throw error;

        return postRepository.addPost({title, subtitle, text, image, status, publishedAt});

    }
}