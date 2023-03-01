/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Método UP: responsável pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Método DOWN: deletar a tabela em caso de um problema
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
