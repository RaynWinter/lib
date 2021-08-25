exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.integer('my_super');
    table.boolean('is_super')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies')
};