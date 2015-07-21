// carreaga modulo do mongoose
var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
	  console.log('[OK!]mongoose connected in ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
	  console.log('[OK!]mongoose disconnected in ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
	  console.log('[ERRO]mongoose connection error: ' + erro);
	});

	process.on('SIGINT', function() {
  	  mongoose.connection.close(function() {
        console.log('[ERRO]mongoose! disconnected by the application end');
        process.exit(0);
      });
    });
}