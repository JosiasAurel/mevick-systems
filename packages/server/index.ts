import express, { Application, Request, Response } from "express";

import { ApolloServer } from "apollo-server-express";

// graphql specifics
import { resolvers } from "./graphql/resolvers";
import { typeDefinitions } from "./graphql/typeDefs";

const app: Application = express();

// import models
import { User } from "./database";

// accept JSON requests
app.use(express.json());

const port: number = 4000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from basic server");
});

app.post("/signup", (req: Request, res: Response) => {

    // get the new user credentials
    const { name, email, password, role } = req.body;

    let isError: boolean = false;

    let newUser: any = new User({name, email, password, role});

    newUser.save((error: any, user: any) => {
        if (error !== undefined) {
            isError = true;
            return;
        }
    });

    if (!isError) {
        res.json({status: "Success"});
    } else {
        res.json({status: "Failed"});
    }
});


// this route will fetch the first use that matches the credentials passed or return an error
app.post("/login", (req: Request, res: Response) => {

    // get the credentials
    const { email, password } = req.body;

    let fetchedUser: any;

    User.find({email, password}, (error: any, user_: Array<any>) => {
        if (error) {
            res.json({status: "Failed"});
            return;
        }

        res.json(user_[0]);
    });
});

// create our apollo server instance
const server: ApolloServer = new ApolloServer({ typeDefs: typeDefinitions, resolvers: resolvers });

// mout our express server
server.start().then(() => server.applyMiddleware({app}));

app.listen(port, () => console.log(`[Listening] :${port}`));