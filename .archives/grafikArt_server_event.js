let url = require('url')
let http = require('http')
let fs = require('fs')
const EventEmitter = require('events')

let App = {
    start: function (port) {
        
        let emitter = new EventEmitter()

        let server = http.createServer( function (request, response) {

            response.writeHead(200, { 'Content-Type': 'text/html' })

            console.log(request.url)

            if (request.url === '/') {

                emitter.emit('root', response)
            }

            response.end()
        }).listen(port)
        return emitter
    }  
}

let app = App.start(8080)

app.on('root', function (response){
    response.write("Je suis à la racine")
})
