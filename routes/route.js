module.exports = function(app) {
 
    app.get('/route', function(req, res) {
	    res.render('index.html', {
	        title : "Sample Node Express + Nunjucks app",
	        body : "This is a route in another file"
	    });
	});
}