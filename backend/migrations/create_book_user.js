exports.up = function(knex) {
  return knex.schema.createTable('bullet_user', table => {
    table.integer('bullet_id');
    table.integer('user_id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bullet_user')
};