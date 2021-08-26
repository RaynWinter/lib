exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.string('user_name');
    table.boolean('is_librarian')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies')
};