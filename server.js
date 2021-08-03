const express = require("express");

const app = express();

const port = 3000;

// set templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/:page", (req, res) => {
    res.render(req.params.page);
});

app.get("/home/{page}", (req, res) => {
    let sampleArticle = {
        title: "It works",
        shortDescription: "Does it really work ?",
        readTime: "2",
        publishDate: "Aug 03 2021"
    };

    res.render(__dirname + `/dashboard/${req.params.page}`, {
        article: sampleArticle
    });
});

app.get("/dashboard/{page}", (req, res) => {
    res.render(__dirname + `/dashboard/${req.params.page}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));