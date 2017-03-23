'use strict';

//////////////////////////////
// Requires
//////////////////////////////
const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const nunjucks = require('nunjucks');

const app = express();
const routes = require('./routes/route')(app);

app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.get('/', function(req, res) {
    res.render('index.html', {
        title : "Sample Node Express + Nunjucks app",
        body : "This is a route"
    });
});


app.get('/test/', function(req, res) {
    res.render('index.html', {
        title : "Test url",
        body: "This is another route"
    });
});


//////////////////////////////
// Start the server
//////////////////////////////
app.listen(app.get('port'), () => {
  // Mean to console.log out, so disabling
  console.log(`Server starting on: ` + app.get('port')); // eslint-disable-line no-console
});