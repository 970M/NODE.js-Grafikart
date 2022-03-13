const express = require("express");
const app = express();

const session = require("express-session"); // Mettre en place et gérer les sessions coté serveur

// Configuration URL
const port = 1337;
const hostname = "127.0.0.1";

//----------------------------------------
// Routeur de template
//----------------------------------------

// Definir le moteur de templates à ejs
app.set("view engine", "ejs");

//----------------------------------------
// Middlewares (executé dans l'ordre de déclaration)
//----------------------------------------

// Delivrer les fichiers statiques (ex: semantic.min.css)
// Mettre en parametre le dossier contenant les fichiers statiques
// app.use(express.static("public")); // http://127.0.0.1:1337/semantic/semantic.min.css
// Prefixer pour ne pas mélanger les assets et les urls
app.use("/assets", express.static("public")); // http://127.0.0.1:1337/assets/semantic/semantic.min.css (à changer dans <link>)

// Pour utiliser le body-parsing pour traiter request.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Configurer la session
app.use(
    session({
        secret: "CHANGE ME",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Pas de https
    })
);
// Créer un middleware
app.use(require("./middlewares/flash"));

//----------------------------------------
// Routes
//----------------------------------------

app.get("/", (request, response) => {
    //res.send("GET: Hello World!");

    // Afficher le cas échéant l'erreur stockée dans la session
    // Systeme de message flash

    // // Méthode remplacée par le middleware fash()
    // if (request.session.error) {
    //     response.locals.error = request.session.error;
    //     request.session.error = undefined;
    // }

    console.log(request);

    // Rendre une vue
    response.render("pages/index", { key1: "POST" });
});

app.post("/", (request, response) => {
    console.log("body:", request.body); // http://expressjs.com/fr/api.html#req.body
    if (request.body.message === undefined || request.body.message === "") {
        // // Rendre une vue et passer des valeurs
        // response.render("pages/index", {
        //     key1: "POST",
        //     error: "Vous n'avez pas entré de message :(",
        // });

        // Sauvegarder un message d'erreur dans une session et rediriger vers la page d'acceuil

        // // Méthode remplacée par le middleware fash()
        // request.session.error = "Il y une erreur"; // stockage d'une clé error

        request.flash("error", "Vous navez pas posté de message");
        response.redirect("/");
    }

    // Rendre un format json
    // response.json(request.body);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname}:${port}`);
    //console.log("Example app listening on %s:%i", hostname, port);
});
