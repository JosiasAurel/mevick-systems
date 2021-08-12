
import { Document, model, Schema } from "mongoose";

interface IArticle extends Document {
    title: string
    content: string
    readTime: number
    owner: string
}

const ArticleSchema = new Schema<IArticle>({
    title: String,
    content: String,
    readTime: Number,
    owner: String
});

const Article = model("Article", ArticleSchema);

export { Article };