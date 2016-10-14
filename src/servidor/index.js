var express = require('express');
var app = express();

// ___ Read statics files with express
app.use(express.static('public'));

// ___ GET /votes
app.get('/votes', function (req, res) {
	res.json([])
});
// ___ POST /vote/<id>
app.post('/vote/:id', function (req, res) {

});

// ___ DELETE /votes/<id>

// ___ Puerto listen de la app
app.listen(4281, function() {
	console.log('Servidor iniciado correctamente. \n (Escuchando el puerto 4281 con Express)');
});
