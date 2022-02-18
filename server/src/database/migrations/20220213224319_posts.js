/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description', [240]).notNullable()
    table.string('text', [3500]).notNullable()
    table
      .integer('users_id')
      .references('users.id')
      .onDelete('Cascade')
      .onUpdate('Cascade')
      .notNullable()
    table.timestamps(true, true)
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('posts')
