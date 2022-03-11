let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer();
server.on("request", (request, response) => {
    console.log("Il y a eu une requete sur: ", request.url);
    // Parser l'url avec le module url et la query string (true)
    // ex : mettre l'url http://127.0.0.1:1337/?name=marc&age=27
    let urlObj = url.parse(request.url, true);
    console.log("URL: ", urlObj);

    // Récupérer les parametres de la query string
    let query = urlObj.query;
    let name = query.name === undefined ? "anonyme" : query.name;

    // Lire le fichier index.html (utf8 --> mettre data au format texte)
    fs.readFile("index.html", "utf8", (err, data) => {
        // Renvoyer err le cas échéant
        if (err) {
            response.writeHead(404);
            response.end("Ce fichier n'exite pas");
            //throw err;
        } else {
            // Renvoyer une entête de réponse de statut 200 à chaque requetes
            response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
            });
            console.log(data);
            console.log(name);
            // Inserer les parametres de la query string dans les données (fichier html)
            data = data.replace("{{ NAME }}", name);
            // Transmettre les données lues
            response.write(data);
            // Renvoyer un message
            response.end("Hello world!!!");
        }
    });
});

// server.listen(8080);
// console.log("Server running at http://localhost:8080/");

server.listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");
