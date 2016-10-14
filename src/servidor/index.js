var http = require('http');
var assets = require('./assets');
/* var ip = java.net.InetAddress.getLocalHost().getHostAddress ();
console.log('Tu IP es: "' + ip + '"'); */

var server = http.createServer(function (require, response) {
	console.log('He recibido un require a ' + require.url );
	switch (require.url) {
		case '/':
		assets.serveStatic('index.html', function (err, content) {
			response.end(content);
		})
		  break
		case '/app.js':
		assets.serveStatic('app.js', function (err, content) {
			response.end(content);
		})
		  break
		case '/app.css':
		assets.serveStatic('app.css', function (err, content) {
			response.end(content);
		})
		  break
		default:
		response.statusCode = 404;
		response.end('Not found');
	}
});

server.listen(4280, function() {
	console.log('Servidor iniciado correctamente. \n (Escuchando el puerto 4280)');
});
