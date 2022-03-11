let express = require('express')
let session = require('express-session')
let cookieParser = require('cookie-parser');

let app = express()

///// Moteur de template
app.set('view engine', 'ejs')

///// Middleware
app.use('/assets', express.static('public')) //app.use(express.static('public'))
// Parsers
app.use(cookieParser());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'changeme',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // true si https
  }))

///// Route
app.get('/', function (request,response) {

    response.locals.name = "gyom"
    console.log("DANS GET:", request.session.error)

    if (request.session.error) {
    //if (request.session.error !== undefined && request.session.error !== '') {

        response.locals.error = request.session.error
        request.session.error = undefined
    }

    response.render('pages/index')    
})

app.post('/', function (request,response) {

    //console.log(request.session)
    response.locals.name = "gyom"

    if (request.body.message === undefined || request.body.message === '') {
        
        request.session.error = "Message vide! :("

        console.log("DANS POST:", request.session.error)
        response.redirect('/')

    } else {
        console.log("DANS POST (mess):", request.body.message)
        response.render('pages/index')
    }

    //response.json(request.body) // renvoi sur une autre page tbd
})

app.listen(8080)

