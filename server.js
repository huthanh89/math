//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path        = require('path');
const express     = require('express');
const compression = require('compression')
const app         = express();
const config      = require('./server/config.js');
const mongoose    = require('mongoose');

//-----------------------------------------------------------------------------//
// Schema
//-----------------------------------------------------------------------------//

/*
const User = require('./server/model/user.js');

//-----------------------------------------------------------------------------//
// Connect to Mongo DB
//-----------------------------------------------------------------------------//

mongoose.connect(config.dbAddress, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

//-----------------------------------------------------------------------------//
// Create a document

const user = new User.Model({
    name: 'goo',
    coin: 88
});

user.save(function (err) {
    if (err) {
        console.log(err);
    } 
    else {
        console.log('meow');
    }
});
*/

//-----------------------------------------------------------------------------//
// Configure App
//-----------------------------------------------------------------------------//

// Tell express to look for views in the following directory.

app.set("views", path.join(__dirname, "dist"));

// Set view engine to be interpret as html.

app.set('view engine', 'html');

// Use compression to GZip files size.

app.use(compression());

/*
// Debug
app.use('/', function(req, res, next){
    console.log('MathTingz--------', req.url);
    next()
});
*/

//-----------------------------------------------------------------------------//
// Handle routes.
//-----------------------------------------------------------------------------//

// If the use land in any of these urls, send them to the base url.

let badUrls = [
    '/game/:type',
    '/summary',
    '/loot'
]

badUrls.forEach(function(url){
    app.get(`${config.baseUrl}${url}`, function(req, res){
        res.redirect(`${config.baseUrl}`);
    });
    
});


let urls = [
    '/',
    '/menu',
    '/game',
    '/game/:type',
    '/summary',
    '/setting',
    '/rank'
]

urls.forEach(function(url){
    app.use(`${config.baseUrl}${url}`,  express.static(__dirname + '/dist'));
    app.get(`${config.baseUrl}${url}`, function(req, res){
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
