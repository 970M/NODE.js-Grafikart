const EventEmitter = require('events')

let monEcouteur = new EventEmitter()


monEcouteur.on('saute', function (a, b){

    console.log("J'ai sauté", a, b)
}) 



monEcouteur.emit('saute', 10, 20)
monEcouteur.emit('saute', 10, 20)
monEcouteur.emit('saute', 10, 20)