
import { gql } from "apollo-server-express";

const typeDefinitions: any = gql`
    type User {
        name: String!
        email: String!
        id: ID!
    }

    type Article {
        title: String!
        content: String!
        readTime: Int!
        id: ID!
    }

    type Query {
        getUsers: [User]
        getUser(id: ID): User
        getArticles: [Article]
        getArticle(id: ID): Article
    }

    type Mutation {
        createArticle(title: String!, content: String!, readTime: Int!): Article
        deleteArticle(id: ID!): String
        updateArticle(id: ID!, title: String, content: String, readTime: Int): Article
    }
`;

export { typeDefinitions };