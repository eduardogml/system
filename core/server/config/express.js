// carregar modulos Express e afins
var express = require('express');
var load = require('express-load');

module.exports = function(){
	// criar instancia de aplicação Express
	var app = express();

	// Express Configuration

	// Express Settings
	app.set('view engine', 'ejs');
	app.set('views', './core/server/views');
	app.use(express.static('./core/client'));

	// Express Environments

	// configuração do MVC
	load('models', {cwd: './core/server'})
	.then('controllers')
	.then('routes')
	.into(app);

	// view exibida quando pagina não for encontrada(erro 404)
	app.get('*', function(request, response){
		response.status(404).render('404');
	});

	// retornar aplicação servidor configurada.
	return app;
}