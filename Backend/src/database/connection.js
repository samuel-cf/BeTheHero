// CONEXÃO COM O BANCO DE DADOS
const knex = require('knex');
// Importa o knex

const configuration = require('../../knexfile');
// Importa as configuracoes do banco de dados, no arquibo knexfile

const connection = knex(configuration.development);
// Criando a conexao

module.exports = connection; 
// Exportanto a conexao com o banco de dados