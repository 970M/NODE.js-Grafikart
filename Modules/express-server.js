// let express = require("express");
// let app = express();
// <=>
let app = require("express")();

app.get("/", (request, response) => {
    response.send("Hello, you are on root");
});

app.get("/demo", (request, response) => {
    response.send("Hello, you are on demo");
});

app.listen(1337);
