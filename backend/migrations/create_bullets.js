exports.up = function(knex) {
    return knex.schema.createTable('bullets', table => {
      table.increments('bullet_id');
      table.integer('user_id')
      table.date('date');
      table.string('action');
      table.string('impact');
      table.string('result');
      table.string('feedback')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bullets')
  };