
import { Document, model, Schema } from "mongoose";

interface IArticle extends Document {
    title: string
    content: string
    readTime: number
}

const ArticleSchema = new Schema<IArticle>({
    title: String,
    content: String,
    readTime: Number
});

const Article = model("Article", ArticleSchema);

exports { Article };