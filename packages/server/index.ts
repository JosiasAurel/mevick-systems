import express, { Application, Request, Response } from "express";

const app: Application = express();

// import models
import { User } from "./database";

// accept JSON requests
app.use(express.json());

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

app.listen(4000, () => console.log("Working on port 4000"));