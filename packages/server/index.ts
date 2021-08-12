import express, { Application, Request, Response } from "express";

import { ApolloServer } from "apollo-server-express";

// graphql specifics
import { resolvers } from "./graphql/resolvers";
import { typeDefinitions } from "./graphql/typeDefs";

// import managers
import { validateToken, createToken } from "./utils/tokenmanager";
import { hashPassword, isPassword } from "./utils/passmanager";

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
    // get information from user request
    // console.log(req.body);
    const { name, email, password, role } = req.body;

    // new user information
    const newUserData = {
        name: name,
        email: email,
        password: hashPassword(password),
        role: role
    };

    // create new user in database 

    let newUser = new User(newUserData);

    newUser.save((error: Error, user: any) => {
        if (error) {
            res.send({"Message": "NotCreated"});
            return;
        }

        // generate a token for the user
        let newUserToken: string = createToken({email: user.email, id: user._id, role: user.role});
        // console.table({name: user.name, email: user.email, id: user._id.toString(), password: user.password, location: user.location, registrationDate: user.registrationDate});
        res.json({
            Message: "Created",
            Token: newUserToken,
            name: name,
            email: email
        });

    });

    // Created a user

});


// this route will fetch the first use that matches the credentials passed or return an error
app.post("/login", (req: Request, res: Response) => {
    // get information submitted
    const { email, password } = req.body;

    User.findOne({email: email}, (error: any, user: any) => {
        // handle error
        // console.log(error);
        if (error) {
            // return an error if no account matches the entered email
            res.json({
                message: "Could not find an account with that email"
            });
            return
        }

        // the above error handler seems not to handle errors the way i expect
        // Maybe wrapping what is below in a try-catch block might help
        // the assumption is that the catch means the email entered was incorrect here

        try {
            	// if there are no errors, do this ->
            if (isPassword(password, user.password)) {
            // if the password entered by the user is a valid one
            // create a new token to issue
            let newToken: string = createToken({email: user.email, id: user._id, role: user.role});

            res.json({
                message: "Login Successful",
                token: newToken,
                name: user.name,
            });

        } else {
            // incorrect password if no match
            res.json({
                message: "Incorrect Password"
            });
        }
        } catch (err0r) {
            res.json({
                message: "Incorrect email"
            })
        }

    });

    // logged in bro  
});
// create our apollo server instance
const server: ApolloServer = new ApolloServer({
    typeDefs: typeDefinitions, 
    resolvers: resolvers,
    context: ({ req }) => {
        
        // get the request headers
        const requestHeaders: any = req.headers;

        // get the authentication JWT
        const authToken: string = (requestHeaders.authorization).split(" ")[1];

        // validate the token to get user data
        try {
            const userData: any = validateToken(authToken);
            // console.log(userData)
            return userData;
        } catch (error: any) {
            return {"message": "AuthError"};
        }
    }
});

// mout our express server
server.start().then(() => server.applyMiddleware({app}));

app.listen(port, () => console.log(`[Listening] :${port}`));