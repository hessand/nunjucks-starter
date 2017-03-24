module.exports = function(app) {
 
    /*app.get('/route', function(req, res) {
	    res.render('index.html', {
	        title : "Sample Node Express + Nunjucks app",
	        body : "This is a route in another file"
	    });
	});*/
	
	app.get('/projects/:project', function(req, res){
		console.log(req.params.project);
		switch (req.params.project) {
			case 'dataworks':
				var data = require('./data/dataworks.json');
				console.log('good switch');
				res.render('index.html', {
			        title : "Sample Node Express + Nunjucks app",
			        body : "This is a route in another file",
			        data: data
			    });
			    break;
		    default:
		    	console.log('bad switch');
		    	res.redirect('/');
		    	break;
		}
	});
}