import express, { Application, Request, Response } from "express";

const app: Application = express();

// import models
import { User } from "./database";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from basic server");
});

app.post("/signup", (req: Request, res: Response) => {

    // get the new user credentials
    const { name, email, password, role } = req.body;

    let isError: boolean = false;

    let newUser: any = User.create({name, email, password, role}, (error: any, user: any) => {
        if (error) {
            isError = true;
            return;
        }

        return;
    });

    if (!isError) {
        return {status: "Success"}
    } else {
        return {status: "Failed"}
    }
});

app.listen(4000, () => console.log("Working on port 4000"));