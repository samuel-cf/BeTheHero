// Código que exporta objeto com os métodos

const connection = require('../database/connection');
// Importa as conexoes

const crypto = require('crypto');
// pacote que vem junto com o node que é pra criptografia, 
// mas tem um metodo que cria string aleatoria


module.exports = {
    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id })
    },

    async index(request, response) { 
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();
        console.log(count)
        //comando join relaciona dados de duas tabelas
        //trazer dados da tabela de ongs, onde o id nessa tabela seja incidents.ong_id
        // rota get para listar 
        const incidents = await connection('incidents') 
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') 
            .limit(5)
            .offset((page-1)*5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        // await -> aguarda o codigo finalizar
        // conectar todos os campos da tabela incidents
        
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async delete(request, response) { 
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incident.ong_id != ong_id) {
            return response.status(401).json({error : 'Operation not permited.'});
        }
        
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
};