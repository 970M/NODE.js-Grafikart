/*** [[ "BASIC" SERVER ]] *********************************
Inclure le module http avec la fonction require ;
Créer un serveur HTTP avec la méthode createServer, en lui fournissant une fonction plaçant le texte "Hello World" dans la réponse renvoyée à chaque requête ;
Mettre le serveur en écoute sur le port 1337 ;
Indiquer dans la console que le serveur était lancé.
*********************************************************/

var http = require('http'); // Nous demandons à Node.js d'inclure le module http, et nous décidons d'accéder à ses méthodes via un objet http
http.createServer(          // La méthode createServer de l'objet http permet comme son nom l'indique de créer un serveur (*)
    function (req, res) {   // La fonction qui est passée en paramètre à createServer est celle qui sera appelée à chaque requête sur notre serveur. Elle prend elle-même deux paramètres : la requête (req) et la réponse (res)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }
).listen(1337, '127.0.0.1'); // La méthode listen du serveur permet de lancer l'écoute, ici sur le port 1337 de l'hôte 127.0.0.1 (localhost)
console.log('Server running at http://127.0.0.1:1337/');


/********************************************************
(*) Elle renvoie un objet « serveur », qui est ici masqué en appelant directement la méthode listen. On aurait pu écrire :
var server = http.createServer(function(req,res) { ... });
server.listen(1337, '127.0.0.1');

- La requête est un objet permettant d'accéder aux détails sur la requête envoyée au serveur : en-têtes HTTP,
paramètres GET ou POST, etc. Nous ne l'utilisons pas ici.

- La réponse (res) est l'objet qui nous permet d'envoyer une réponse à la requête. Dans notre cas, nous effectuons
deux actions sur cette réponse :

    - nous définissons l'en-tête HTTP Content-type à _text__/plain_, ce qui permet d'indiquer que le contenu
que nous renvoyons est de type texte. Il pourrait être text/html, application/json, bref ce que l'on veut,
tant qu'il s'agit d'un type MIME standard ;

    - nous terminons la requête en envoyant le texte "Hello World" (suivi d'un retour à la ligne, qui n'est pas
indispensable ici).

Alternative:
------------
let http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charsets=utf-8"});
    response.write("Hello World, SALUT");
    response.end();
}

let serveur = http.createServer();
serveur.on('request', onRequest);  
serveur.listen(1337, '127.0.0.1'););
-----------
*********************************************************/

