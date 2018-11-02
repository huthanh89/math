//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path        = require('path');
const express     = require('express');
const compression = require('compression')
const app         = express();
const config      = require('./server/config.js');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');

//-----------------------------------------------------------------------------//
// Connect to Mongo Database
//-----------------------------------------------------------------------------//

mongoose.connect(`${config.dbAddress}${config.dbName}`, {
    useCreateIndex:  true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function () {  
    console.log(`Connected to Math databse on ${config.dbAddress}${config.dbName}`);
}); 

mongoose.connection.on('error',function (err) {  
    console.error(`Error Connection to Math database: ${err}`);
}); 

//-----------------------------------------------------------------------------//
// Configure App
//-----------------------------------------------------------------------------//

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Tell express to look for views in the following directory.

app.set("views", path.join(__dirname, "dist"));

// Set view engine to be interpret as html.

app.set('view engine', 'html');

// Use compression to GZip files size.

app.use(compression());

/*
// Middleware Logger
app.use(function(req, res, next){
    console.log('Logger--------', req.url);
    next();
});
*/

//-----------------------------------------------------------------------------//
// Handle routes.
//-----------------------------------------------------------------------------//

// Initialize api routes:

require('./server/api/module.js')(app)

// If the use land in any of these urls, send them to the base url.

let badUrls = [
    '/game/:type',
    '/summary',
    '/loot'
]

badUrls.forEach(function(url){
    app.get(`${url}`, function(req, res){
        res.redirect(`${config.baseUrl}`);
    });
});

let urls = [
    '/',
    '/menu',
    '/game',
    '/summary',
    '/feed/:id',
    '/setting',
    '/visit/:type',
    '/visit',
    '/user',
    '/store',
    '/rank',
    '/pool'
]

urls.forEach(function(url){
    app.use(`${url}`,  express.static(__dirname + '/dist'));
    app.get(`${url}`, function(req, res){
        res.render('index.html');
    });
});

//-----------------------------------------------------------------------------//
// Start Application
//
// Listen app on the following port.
//-----------------------------------------------------------------------------//

app.listen(config.port, () => console.log(`Math App listening on port ${config.port}`))

//-----------------------------------------------------------------------------//
