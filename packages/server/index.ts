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

app.listen(4000, () => console.log("Working on port 4000"));