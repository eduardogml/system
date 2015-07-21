// carregar modulos do sistema
var http = require('http');
var app = require('./core/server/config/express')();
var config = require('./core/server/config/config')();
// conexao com mongodb
require('./core/server/config/mongoose')(config.dbusercore);

// coloca servidor Express no ar com as configurações determinadas
http.createServer(app).listen(config.port, config.address, function(){
	if(config && app) console.log('[OK!]system run(' + config.env + '): address:' + config.address + ', port:' + config.port + ', domain:' + config.domain);
	else console.log('[ERRO]system run:config or app is not set');
});