/*** [[ "GET-HTML-JSON" SERVER ]] *********************************

Récupérer et utiliser les paramètres GET passés à la requête ;
Lire un fichier HTML local et le renvoyer au navigateur ;
Renvoyer du contenu structuré en JSON.

*********************************************************/

var http = require('http'); // Créer un serveur Web
var url = require('url');   // Analyser une URL avec ses paramètres
var fs = require('fs');     // Lire un fichier sur le serveur local

var server = http.createServer( // La méthode createServer de l'objet http permet comme son nom l'indique de créer un serveur (*)
    function (req, res) {       // La fonction qui est passée en paramètre à createServer est celle qui sera appelée à chaque requête sur notre serveur
        var url_parts = url.parse(req.url, true);
        var name = url_parts.query.name;
        if (name) {
            console.log('Name: ' + name);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Hello ' + name + '!' }));
        } else {
            console.log('No name!');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('hello02.html', function (err, data) {
                res.end(data);
            });
        }
    }
).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

