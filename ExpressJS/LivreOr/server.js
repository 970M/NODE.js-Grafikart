const express = require("express");
const app = express();
const port = 1337;
const hostname = "127.0.0.1";

//----------------------------------------
// Routeur de template
//----------------------------------------

// Definir le moteur de templates à ejs
app.set("view engine", "ejs");

//----------------------------------------
// Middleware
//----------------------------------------

// Delivrer les fichiers statiques (ex: semantic.min.css)
// Mettre en parametre le dossier contenant les fichiers statiques
// app.use(express.static("public")); // http://127.0.0.1:1337/semantic/semantic.min.css
// Prefixer pour ne pas mélanger les assets et les urls
app.use("/assets", express.static("public")); // http://127.0.0.1:1337/assets/semantic/semantic.min.css (à changer dans <link>)

// Pour utiliser le body-parsing pour traiter request.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//----------------------------------------
// Routes
//----------------------------------------

app.get("/", (request, response) => {
    //res.send("GET: Hello World!");

    // Rendre une vue
    response.render("pages/index", { key1: "POST" });
});

app.post("/", (request, response) => {
    console.log(request.body); // http://expressjs.com/fr/api.html#req.body
    if (request.body.message === undefined || request.body.message === "") {
        // Rendre une vue
        response.render("pages/index", {
            key1: "POST",
            error: "Vous n'avez pas entré de message :(",
        });
    }

    // Rendre un format json
    // response.json(request.body);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname}:${port}`);
    //console.log("Example app listening on %s:%i", hostname, port);
});
