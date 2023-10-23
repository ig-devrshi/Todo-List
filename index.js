const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let newItems = [];
app.get("/", (req,res)=>{
    let today = new Date();
    let options = {weekday : 'long',year:'numeric',month : 'long', day:'numeric'}
    let day = (today.toLocaleDateString("en-US",options));
    res.render("list",{kindOfDay : day, newListItem : newItems});
});

app.post("/",(req,res)=>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`port is running at server ${port}.`);
});
