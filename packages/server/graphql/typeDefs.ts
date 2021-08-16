
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
        owner: User
        id: ID!
    }

    type Query {
        getUsers: [User]
        getUser(id: String!): User
        getArticles: [Article]
        getArticle(id: String!): Article
    }

    type MSresponse {
        status: String
    }

    type Mutation {
        createArticle(title: String!, content: String!, readTime: Int!, owner: String!): MSresponse
        deleteArticle(id: String!): MSresponse
        updateArticle(id: String!, title: String, content: String, readTime: Int): MSresponse
        updateUser(id: String!, name: String, email: String): MSresponse
        deleteUser(id: String!): MSresponse
    }
`;

export { typeDefinitions };