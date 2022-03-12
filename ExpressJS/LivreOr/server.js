const express = require("express");
const app = express();
const port = 1337;
const hostname = "127.0.0.1";

// Definir le moteur de templates à ejs
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    //res.send("GET: Hello World!");

    // Rendre une vue
    response.render("pages/index", { key1: "970M" });
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname}:${port}`);
    //console.log("Example app listening on %s:%i", hostname, port);
});
