var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    subtitle: String,
    category: String,
    text: String,
    status: { type: String, default: 'rascunho' },
    image: String,
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date
});

module.exports = mongoose.model('Post', postSchema);