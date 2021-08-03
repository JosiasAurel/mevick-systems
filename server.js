const express = require("express");

const app = express();

const port = 3000;

// set templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/{page}", (req, res) => {
    res.render(req.params.page);
});


app.listen(port, () => console.log(`Server listening on port ${port}`));