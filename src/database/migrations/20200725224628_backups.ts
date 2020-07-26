import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('backup', table => {
        table.increments('id').primary();
        table.string('description');
        table.string('source').notNullable();
        table.string('destiny').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('backup')
}

