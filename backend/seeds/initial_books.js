exports.seed = function(knex) {
    return knex('books').del()
      .then(function () {
        return knex('books').insert([
          {
            book_id: '1',
            book_title: 'I have no mouth and I must scream',
            book_author: 'Michelle',
            book_ISBN: '978-3-14-148410-0',
            book_status: true,
            book_statusDate: '08152021',
            user_id: '0'
          },
          {
            book_id: '2',
            book_title: 'I will kill you',
            book_author: 'Putin',
            book_ISBN: '478-3-11-148410-0',
            book_status: true,
            book_statusDate: '08152021',
            user_id: '0'
          },
          {
            book_id: '3',
            book_title: 'I wanna scream',
            book_author: 'Jacob',
            book_ISBN: '378-3-16-148410-0',
            book_status: false,
            book_statusDate: '08152021',
            user_id: '1'
          },
          {
            book_id: '4',
            book_title: 'I wanna scream too bro',
            book_author: 'Oleg',
            book_ISBN: '278-3-16-148410-0',
            book_status: false,
            book_statusDate: '08152021',
            user_id: '2'
          },
          {
            book_id: '5',
            book_title: 'I belive i can fly',
            book_author: 'Jordan',
            book_ISBN: '178-3-16-148410-0',
            book_status: true,
            book_statusDate: '08152021',
            user_id: '0'
          },
        ]);
      });
  };