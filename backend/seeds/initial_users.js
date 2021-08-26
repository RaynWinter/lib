exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {
            user_id: "1",
            user_name: "Oleg",
            is_librarian: false
          },
          {
            user_id: "2",
            user_name: "Michelle",
            is_librarian: false
          },
          {
            user_id: "3",
            user_name: "Batman",
            is_librarian: true
          },
        ]);
      });
  };