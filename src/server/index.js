var express = require('express');
const app = express();

// ___ Objeto de votos (por memoria)
const votes = {} 

// ___ Read statics files with express
app.use(express.static('public'));

// ___ GET /votes
app.get('/votes', (req, res) => {
	res.json(votes);
});
// ___ POST /vote/<id>
app.post('/vote/:id', (req, res) => {
	let id = req.params.id;
	if (votes[id] === undefined) {
		votes[id] = 1;
	} else {
		votes[id] = votes[id] + 1;
	}
});

// ___ DELETE /votes/<id>

// ___ Puerto listen de la app
app.listen(4281, function() {
	console.log('Servidor iniciado correctamente. \n (Escuchando el puerto 4281 con Express)');
});
