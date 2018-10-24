//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path        = require('path');
const express     = require('express');
const compression = require('compression')
const app         = express();

// Tell express to look for views in the following directory.

app.set("views", path.join(__dirname, "dist"));

// Set view engine to be interpret as html.

app.set('view engine', 'html');

// Use compression to GZip files size.

app.use(compression());

/*
app.use('/', function(req, res, next){
    console.log('MathTingz', req.url);
    next()
});
*/

// Tell how to serve files and where to look.

app.use('/', express.static(__dirname + '/dist'));
app.use('/mathtingz', express.static(__dirname + '/dist'));
app.use('/menu', express.static(__dirname + '/dist'));
app.use('/game', express.static(__dirname + '/dist'));
app.use('/game/:type', express.static(__dirname + '/dist'));
app.use('/summary', express.static(__dirname + '/dist'));

// Handle route.

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/menu', function(req, res){
    res.render('index.html');
});

app.get('/game', function(req, res){
    res.render('index.html');
});

app.get('/game/:type', function(req, res){
    res.render('index.html');
});

app.get('/summary', function(req, res){
    res.render('index.html');
});

app.get('/*', function(req, res){
    res.redirect("/mathtingz/");
});


// Listen app on the following port.

app.listen(3002, () => console.log('Math App listening on port 3002'))

//-----------------------------------------------------------------------------//
