const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
// desacoplando o modulo de rotas do express em uma nova variavel (routes)

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);



// Cria algo para rodar na rota principal ('/')
// o que vem depois da barra é chamado recurso.
// EX: endereço = localhost:3000/users --- recurso = users

/** MÉTODOS HTTP
 * GET: buscar/listar uma informação no back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 **/

module.exports = routes;
// exportando as rotas para setem utilizadas em outras partes do codigo