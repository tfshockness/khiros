var mongoose = require('mongoose');
var {titleValidator, 
    categoryValidator, 
    statusValidator, 
    textValidator} = require('../config/validators');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: { type:String, required: true  },
    subtitle: String,
    category: { type:String, required: true },
    text: { type:String, required: true },
    status: { type: String, required: true,  default: "Rascunho", enum: ["Rascunho", "Publicado", "Arquivado", "Desativado" ]},
    image: String,
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date
});

module.exports = mongoose.model('Post', postSchema);