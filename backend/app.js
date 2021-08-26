const express = require('express');
const app = express();
var cors = require('cors');
const knex = require('knex')(require('./knexfile.js').development);

const date = require('date-and-time')
const now  =  new Date();
const value = date.format(now,'YYYY/MM/DD');
const deadline = date.addDays(now, +14);


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all books
app.get('/books', function(req, res) {
  console.log(knex);
 knex
   .select('*')
   .from('books')
   .then(data => res.status(200).json(data))
   .catch(err =>
     res.status(404).json({
       message:
         'The data you are looking for could not be found. Please try again'
     })
   );
});

// Get specific books
app.get('/books/:book_id', (req, res) => {
  let book = req.params.book_id
  if (isNaN(book)) {
    res.status(400).send('400: Invalid book id')
  } else {
    knex
      .select('*')
      .from('books')
      .where('book_id', book)
      .then((data) => {
        if (data.length === 0){
          return res.status(404).send('404: This book does not exist')
        } else {
        return res.status(200).send(data)
        }
      })
  }
})

// Get specific books
app.get('/unavailable', function(req, res) {
  console.log(knex);
 knex
   .select('*')
   .from('books')
   .where('book_status', false)
   .then(data => res.status(200).json(data))
   .catch(err =>
     res.status(404).json({
       message:
         'The data you are looking for could not be found. Please try again'
     })
   );
});

// Update for specific book
app.put('/books/:book_id/checkout', (req, res) =>  {
  let book = req.params.book_id
  let body = req.body
  if (isNaN(book)) {
    res.status(400).send('400: Invalid book id')
  } else {
    knex
      .select('*')
      .from('books')
      .where('book_id', book)
      .update(body)
      .then(() => {
        return res.status(200).send(`You checked out ${book}. Please return by ${deadline}`)
      })
      .catch((err) => res.status(400).send(err))
  }
});

// Get All users
app.get('/users', function(req, res) {
  console.log(knex);
 knex
   .select('*')
   .from('users')
   .then(data => res.status(200).json(data))
   .catch(err =>
     res.status(404).json({
       message:
         'The data you are looking for could not be found. Please try again'
     })
   );
});

// Get specific users//get user profile information
app.get('/users/:user_id', (req, res) => {
  let user = req.params.user_id
  if (isNaN(user)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex
      .select('*')
      .from('users')
      .where('user_id', user)
      .then((data) => {
        if (data.length === 0){
          return res.status(404).send('404: This user does not exist')
        } else {
        return res.status(200).send(data)
        }
      })
  }
})

app.get('/', (req, res) => {
 res.send('Hello World!')
 
 console.log("Current date and time : " + value)
 console.log("Your deadline: " + deadline)
})

module.exports = app;

