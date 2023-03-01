// Código que exporta objeto com os métodos

const connection = require('../database/connection');
// Importa as conexoes

const crypto = require('crypto');
// pacote que vem junto com o node que é pra criptografia, 
// mas tem um metodo que cria string aleatoria


module.exports = {
    async create(request, response) {
        
    //const params = request.query; // jeito de acessar os query params
    // const params = request.params; jeito de acessar os route params

        const {name, email, whatsapp, city, uf} = request.body; //jeito de acessar os body params, abrindo pela ordem 
        const id = crypto.randomBytes(4).toString('HEX'); // 4 bytes de caracteres hexadecimais

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })


        return response.json({ id });
    },

    async index(request, response) { 
        // rota get para listar 
        const ongs = await connection('ongs').select('*');
        // await -> aguarda o codigo finalizar
        // conectar todos os campos da tabela ongs
    
        return response.json(ongs);
    }





};