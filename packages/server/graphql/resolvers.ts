
import { User, Article } from "../database";

const resolvers = {
    Query: {

        getUsers: async () => {

            let isError: any = false;

            let fetchedUsers: Array<any> = [];

            let unval: any; // dirty trick that works

            let users__ = await User.find((error: any, users_) => {
                if (error) {
                    isError = true;
                }

                fetchedUsers = users_;
                return fetchedUsers;
            });

            unval = await users__;

            if (isError) {
                return {status: "Error"}
            } else {
                return fetchedUsers;
            }
        },

        getUser: async (parent: any, args: any) => {

            // extract the user ID from GraphQL params
            const userId: string = args.id;

            let isError: boolean = false; // error checker
            let fetchedUser: any; // the fetched user

            let unval: any; // dirty but working trick

            let user__ = await User.findById(userId, (error: any, user_: any) => {
                if (error) {
                    isError = true;
                }

                fetchedUser = user_;
            });

            unval = await user__;

            if (!isError) {
                return fetchedUser;
            } else {
                return {status: "Failed"}
            }
        },
        getArticles: async () => {

            // error checker
            let isError: boolean = false;

            // fetched articles
            let fetchedArticles: Array<any> = [];

            let unval: any;

            let articles_: any = await Article.find((error: any, articles: any) => {
                if (error) {
                    isError = true;
                }

                fetchedArticles = articles;
            });

            unval = await articles_;

            if (isError) {
                return [
                    {
                        title: "NO",
                        content: "NO",
                        readTime: "NO",
                        owner: "NO",
                        id: "NO"
                    }
                ];
            } else {
                return fetchedArticles;
            }
        },
        getArticle: async (parent: any, args: any) => {

            // get the article id
            const { id } = args;

            // error checker
            let isError: boolean = false;
            let isError_: boolean = false;

            let fetchedArticle: any; 

            let unval: any; // dirty trick that work..
            let unval_: any;

            let article__: any = await Article.findById(id, async (error: any, article_: any) => {
                if (error) {
                    isError = true;
                }
    
                fetchedArticle = article_;
            });

            unval = await article__;

            if (!isError) {
                if (!isError_) {
                    return fetchedArticle;
                }
            } else {
                return {
                    title: "NO",
                    content: "NO",
                    readTime: "NO",
                    owner: "NO",
                    id: "NO"
                }
            }
        }
    },

    Mutation: {
        createArticle: (parent: any, args: any) => {
            
            // get the article data from the graphql params
            const { title, content, readTime, owner } = args;

            // error checker
            let isError: boolean = false;

            // create the new article
            let newArticle: any = new Article({title, content, readTime, owner});

            // save the new article
            newArticle.save((error: any, newArticle__: any) => {
                if (error) {
                    isError = true;
                }
            });

            if (!isError) {
                return {status: "Success"}
            } else {
                return {status: "Failed"}
            }
        },

        updateArticle: (parent: any, args: any) => {

            // get the id of the article 
            const { id } = args;

            let isError: boolean = false;
            let isError_: boolean = false;

            let unval: any; // dirty trick 1

            let oldArticleData: any;

            Article.findById(id, (error: any, article_: any) => {
                if (error) {
                    isError = true;
                }

                // take new article data
                oldArticleData = article_;
                // console.log(article_);

                // update article under here
                Article.findByIdAndUpdate(id, {
                    title: args.title ? args.title : article_.title,
                    content: args.content ? args.content : article_.content,
                    readTime: args.readTime ? args.readTime : article_.readTime,
                }, (error: any, updatedArticle__: any) => {
                    if (error) {
                        isError_ = true;
                    }

                })
            });

            if (!isError) {
                if (!isError_) {
                    return {status: "Success"}
                }
            } else {
                return {status: "Failed"}
            }
        },

        deleteArticle: (parent: any, args: any) => {

            // get the id of the article to delete
            const { id } = args;

            let isError: boolean = false; // error checker

            Article.findByIdAndDelete(id, {}, (error: any, _: any) => {
                if (error) {
                    isError = true;
                    return;
                }

            });

            if (!isError) {
                return {status: "Success"}
            } else {
                return {status: "Failed"}
            }
        }

    }
}

export { resolvers };