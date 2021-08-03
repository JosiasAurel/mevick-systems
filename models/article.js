
const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    title: String,
    readTime: String,
    publishDate: String,
    content: String
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;