const express = require("express");

const app = express();

const port = 3000;

// set templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/explore", (req, res) => {
    res.render("explore")
});


app.listen(port, () => console.log(`Server listening on port ${port}`));