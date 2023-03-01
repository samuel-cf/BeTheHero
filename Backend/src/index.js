const express = require('express'); 
// Importa o módulo express (em amarelo) pra dentro da variável express
// Agora a variável express contém todas as funcionalidades do framework disponiveis

const routes = require('./routes'); 
// Importa as rotas que criei no routes.js

const cors = require('cors') 
// importando o cors

const app = express();
// Variável que armazena a aplicação (criando a aplicação)

app.use(cors());


app.use(express.json()); 
// informando para o app que estaremos usando json para as requisicoes

app.use(routes);
// Usa as rotas importadas 


/** TIPOS DE PARÂMETRO
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para alterar ou criar recursos
 * 
 *  */

/** TIPOS DE BANCO DE DADOS
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL server
 * NoSQL: mongoDB, CouchDB
 * 
 *  */

/** COMUNICAÇÃO COM O BANCO DE DADOS
 * Driver : SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333)
// Aplicação ouve a porta 3333
// Quando eu acessar localhost:3333 eu vou acessar a aplicação