var postRepository = require('../repository/post.repository');

module.exports = {
    addPost({ title, subtitle, category, text, image, status = 'rascunho', publishedAt = Date.now() }){
        console.log(typeof(title) === "string");
        console.log(title.trim().length < 1);
        let error = [];
        if(typeof(title) !== "string" || title.trim().length < 1) error.push("Erro no titulo, mudar essa msg depois");
        if(typeof(subtitle) != "string" || subtitle.trim().length < 1) error.push("Erro no subtitulo, mudar essa msg depois");
        if(typeof(text) != "string" || text.trim().length < 1) error.push("Erro no text, mudar essa msg depois");
        if(typeof(image) != "string" || image.trim().length < 1) error.push("Erro no image, mudar essa msg depois");
        if(typeof(status) != "string" || status.trim().length < 1) error.push("Erro no status, mudar essa msg depois");
        //I dont know what is the type that I will put for publishedAt
        if(error.length > 0) throw error;

        postRepository.addPost({title, subtitle, text, image, status, publishedAt});

    }
}