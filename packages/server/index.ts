import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from basic server");
});

app.listen(4000, () => console.log("Working on port 4000"));