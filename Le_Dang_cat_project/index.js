"use strict"

const path = require("path");

const express = require("express");
const app = express();

const port = "3000";
const host = "localhost";
const catStorage = require(path.join(__dirname,"storage","storageLayer.js"))

/* const storage = new Datastorage();
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"pages"));

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

const homePath = path.join(__dirname, "home.html");
// all the links
app.get("/", (req,res)=> res.sendFile(homePath));

// get all
app.get("/all", (req,res)=> {
    catStorage.getAll().then((catData) => res.render("allCats",{result: catData}));
})
// get cat
app.get("/getCat", (req,res) => {
    res.render("getCat", {
        title: "Query result",
        header: "Query result",
        action: "/getCat"
    })
})
app.post("/getCat", (req,res)=> {
    if(!req.body) return res.sendStatus(500);
    const catNumber = req.body.number;
    catStorage.getOne(catNumber)
    .then((cat)=> res.render("catPage", {result : cat}))
    .catch(()=> console.log(error))
})
// 

app.listen(port, host, () => console.log(`Server ${host}:${port} is running`));

/* note to self DEC 8
- add error and status layer into storage 
- add the rest of function 
- add css 


*/