const express = require("express");
const ejs = require("ejs");
const { readFileSync } = require("fs");

const app = express();

const port = 3000;

/* // creating a custom file loader for ejs
const componentsLoader = (path) => {
    return readFileSync(`${__dirname}/views/components/${path}`);
};

// set ejs loader
ejs.fileLoader = componentsLoader;
 */

// set templating engine
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/components", express.static(__dirname + "views/components"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/:page", (req, res) => {
    res.render(req.params.page);
});

app.get("/home/{page}", (req, res) => {

    res.render(`/dasboard/${req.params.page}`);
});

app.get("/explore", (req, res) => {

    /* let sampleArticle = {
        title: "It works",
        shortDescription: "Does it really work ?",
        readTime: "2",
        publishDate: "Aug 03 2021"
    }; */

    res.render("explore/index", {
        article: "Hello"
    });
})

app.get("/dashboard/{page}", (req, res) => {
    res.render(`/dashboard/${req.params.page}`);
});


app.listen(port, () => console.log(`Server listening on port ${port}`));