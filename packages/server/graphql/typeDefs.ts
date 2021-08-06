
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
        getUser(id: ID): User
        getArticles: [Article]
        getArticle(id: ID): Article
    }

    type MSresponse {
        status: String
    }

    type Mutation {
        createArticle(title: String!, content: String!, readTime: Int!, owner: String!): MSresponse
        deleteArticle(id: ID!): MSresponse
        updateArticle(id: ID!, title: String, content: String, readTime: Int): MSresponse
    }
`;

export { typeDefinitions };