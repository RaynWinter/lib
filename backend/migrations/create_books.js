exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
      table.increments('book_id');
      table.string('book_title');
      table.string('book_author');
      table.string('book_ISBN');
      table.boolean('book_status');
      table.string('book_statusDate');
      table.integer('user_id');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bullets')
  };