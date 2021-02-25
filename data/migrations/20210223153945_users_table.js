exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments();
      table.integer('userId').unique().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
