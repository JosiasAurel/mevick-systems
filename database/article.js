
const { Article } = require("../models/index");

function createArticle(title, content, readTime) {
    // creation date
    const publishDate = new Date().toString();

    // error checker
    let isError = false;

    Artivle.create({title, content, readTime, publishDate: publishDate}, (error, article) => {
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
    return;
}