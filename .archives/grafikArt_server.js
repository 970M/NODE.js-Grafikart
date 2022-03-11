let url = require('url')
let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' })

    let query = url.parse(request.url, true).query
   
    let name = query.name === undefined ? 'anonyme' : query.name 

    fs.readFile('grafikArt_index.html', 'utf8', function (err, data) {
        if (err) {
            response.writeHead(404);
            response.end("Erreur lors de l'ouverture du fichier");    
        } else {                
            
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            
            data = data.replace('{{ NAME }}', name)
            response.end(data);
        }
    });


})

server.listen(8080)