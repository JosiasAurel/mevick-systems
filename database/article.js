
const { Article } = require("../models/index");

function createArticle(title, content, readTime) {
    // creation date
    const publishDate = new Date().toString();

    // error checker
    let isError = false;

    let article = new Article({title, content, readTime, publishDate: publishDate}, (error, article) => {
        if (error) {
            isError = true;
            return;
        }
    });

    if (isError)  {
        return {status: false}
    } else {
        return {status: true}
    }
}

function updateArticle(articleId, {title, content}) {

    let oldArticle;
    let fetchError = false;
    let updateError = false;

    Article.findById(articleId, (error, article__) => {
        if (error) {
            fetchError = true;
            return;
        }

        if (!fetchError) {

            // checks
            let title_ = title ? title : article__.title;
            let content_ = content ? content : article__.content;

            Article.findByIdAndUpdate(articleId, {title: title_, content: content_}, (error_, article) => {
                if  (error_) {
                    let updateError = true;
                    return;
                }
            });
        }
    });

    if (!fetchError) {
        if (!updateError) {
            return {status: true};
        }
    } else {
        return {status: false};
    }
}   

function deleteArticle(articleId) {

    let deleted_ = false;

    Article.findByIdAndDelete(articleId, (errror, _) => {
        if (error) {
            deleted_ = true;
        }
        // pass...
    });

    if (deleted_) {
        return {status: true}
    } else {
        return {status: false}
    }
}

module.exports = { createArticle, updateArticle, deleteArticle };