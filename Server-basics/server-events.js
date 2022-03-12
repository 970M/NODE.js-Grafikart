// http://127.0.0.1:1337/ --> Affiche "Je suis à la racine"
// http://127.0.0.1:1337/?name=marc&age=27 --> N'affiche rien

let http = require("http");
let fs = require("fs");
let url = require("url");

const EventEmitter = require("events");

let App = {
    start: function (port) {
        let emitter = new EventEmitter();
        let server = http
            .createServer((request, response) => {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8",
                });
                if (request.url === "/") {
                    emitter.emit("root", response);
                }
                response.end();
            })
            .listen(port);

        return emitter;
    },
};

let app = App.start(1337);
app.on("root", (response) => {
    response.write("Je suis à la racine");
});

// ---------------------------------------
// Créer des écouteurs d'événements
// ---------------------------------------

let monEcouteur = new EventEmitter();

monEcouteur.on("saute", (a, b) => {
    console.log("J'ai sauté", a, b);
});

monEcouteur.emit("saute", 10, 25);
monEcouteur.emit("saute");
monEcouteur.emit("saute");

// ---------------------------------------
