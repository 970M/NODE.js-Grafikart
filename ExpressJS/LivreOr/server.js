const express = require("express");
const app = express();
const port = 1337;
const hostname = "127.0.0.1";

// Definir le moteur de templates à ejs
app.set("view engine", "ejs");

// Delivrer les fichiers statiques (ex: semantic.min.css)
// Mettre en parametre le dossier contenant les fichiers statiques
// app.use(express.static("public")); // http://127.0.0.1:1337/semantic/semantic.min.css
// Prefixer pour ne pas mélanger les assets et les urls
app.use("/assets", express.static("public")); // http://127.0.0.1:1337/assets/semantic/semantic.min.css (à changer dans <link>)

app.get("/", (request, response) => {
    //res.send("GET: Hello World!");

    // Rendre une vue
    response.render("pages/index", { key1: "POST" });
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname}:${port}`);
    //console.log("Example app listening on %s:%i", hostname, port);
});
