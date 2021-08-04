const express = require("express");
const { readFileSync } = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { MONGO_DB_URI__DEV } = require("./serviceConfig");


// init database connection
mongoose.connect(MONGO_DB_URI__DEV, { useUnifiedTopology: true, useNewUrlParser: true });

// database CRUD handlers
const { createUser, updateUser, deleteUser } = require("./database/user");

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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/components", express.static(__dirname + "views/components"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/explore/", (req, res) => {

    /* let sampleArticle = {
        title: "It works",
        shortDescription: "Does it really work ?",
        readTime: "2",
        publishDate: "Aug 03 2021"
    }; */

    res.render("explore", { msg: "Test" })
})

app.get("/:page", (req, res) => {
    res.render(req.params.page);
});


app.get("/dashboard/{page}", (req, res) => {
    res.render(`/dashboard/${req.params.page}`);
});

/* API Routes */

// create user endpoint
app.post("/user", (req, res) => {

    // extract new user data 
    const { name, email, password, role } = req.body;
    let result;

    if (name !== "" && email !== "" && password !== "" && role !== "") {
        result = createUser(name, email, password, role);
    }

    return result;
});

// update user endpoint
app.put("/user/:userId", (req, res) => {

    let userId = req.params.userId; // get user ID from query parameters
    
    const { name, email, password } = req.body; // estract all user information passed

    let updateUser__ = updateUser(userId, { name, email, password }); // update user

    if (updateUser__.status === true) {
        return "Success"
    } else {
        return "Failed"
    }
}); 

app.delete("/user/:userId", (req, res) => {
     
    let userId = req.params.userId; // get user ID from query parameters

    let deleteUser = deleteUser(userId);

    return deleteUser;
    
});

/* End API Routes */


app.listen(port, () => console.log(`Server listening on port ${port}`));