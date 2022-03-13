//http://127.0.0.1:1337/

//var http = require('http'); // Nous demandons à Node.js d'inclure le module http, et nous décidons d'accéder à ses méthodes via un objet http
//var url = require('url');

var fs = require('fs');
var express = require('express');
var app = express();
var n = 0;

/// GET
app.get('/', function (req, res) {
    n++;
    console.log("[[ Appel n°",n,"]]: ", req.method);
    var searchParams1 = new URLSearchParams(req.url);
    console.log("searchParams1:",searchParams1);
        
    var myURL = new URL("http://127.0.0.1:1337/"+req.url);
    //console.log("myURL:",myURL);
    fs.readFile('test_server.html',function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end("Erreur lors de l'ouverture du fichier");    
        } else {                
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Salut comment ça va? " + n);
            res.end(data);
        }
    });
});

/// POST
app.post('/', function (req, res) {
    n++;

    var bodyStr = '';
    req.on("data",function(chunk){
        bodyStr +=  .toString();
        console.log("bodystr:",bodyStr);
    });

    console.log("json:",JSON.stringify(req.body));


    /*
    req.on("end",function(){
        res.send(bodyStr);
    });
    */
    //app.use(express.urlencoded());
    //app.use(express.json());
    //console.log(app); 

    console.log("[[ Appel n°",n,"]]: ", req.method);  
    var searchParams1 = new URLSearchParams(req.url);
    console.log("searchParams1:",searchParams1);
    var myURL = new URL("http://127.0.0.1:1337/"+req.url);
    //console.log("myURL:",myURL);
    fs.readFile('test_server.html',function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end("Erreur lors de l'ouverture du fichier");    
        } else {                
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Salut comment ça va? " + n);
            res.end(data);
        }
    });
});
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');