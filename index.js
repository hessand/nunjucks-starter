'use strict';

//////////////////////////////
// Requires
//////////////////////////////
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

app.set('port', process.env.PORT || 9080);
app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html', {
        title : "Sample Node Express + Nunjucks app"
    });
});


app.get('/test/', function(req, res) {
    res.render('index.html', {
        title : "Test url"
    });
});


//////////////////////////////
// Start the server
//////////////////////////////
app.listen(app.get('port'), () => {
  // Mean to console.log out, so disabling
  console.log(`Server starting on: ` + app.get('port')); // eslint-disable-line no-console
});