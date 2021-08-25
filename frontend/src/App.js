import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Component } from "react";
import { BrowserRouter} from "react-router-dom";


import Book from './components/Book.jsx'
import Home from './components/Home.jsx'


import './App.css';

function App(props) {

  let books = [
        {
        book_id: '1',
        Title: 'I have no mouth and I must scream',
        Author: 'Michelle',
        ISBN: '978-3-16-148410-0',
        Status: true,
        Status_Date: '08152021',
        User_id: '123'
      },
        {
        book_id: '2',
        Title: 'There will come soft rains',
        Author: 'Tessa',
        ISBN: '378-3-16-148410-0',
        Status: false,
        Status_Date: '08292021',
        User_id: '123'
        },
        {
        book_id: '3',
        Title: 'Dog Whisperer (Russian)',
        Author: 'Oleg',
        ISBN: '178-3-16-148410-0',
        Status: false,
        Status_Date: '08252021',
        User_id: '123'
        },
        {
        book_id: '4',
        Title: 'Goldfish',
        Author: 'Greg',
        ISBN: '676-3-16-148410-0',
        Status: true,
        Status_Date: '08292021',
        User_id: '123'
       },
       {
        book_id: '5',
        Title: 'Help',
        Author: 'Jordan',
        ISBN: '178-5-16-148410-0',
        Status: false,
        Status_Date: '08252021',
        User_id: '123'
       },
       {
        book_id: '6',
        Title: 'Blub Blub Blub',
        Author: 'Anonymousfish',
        ISBN: '378-3-16-148410-0',
        Status: true,
        Status_Date: '08292021',
        User_id: '123'
       },
       {
        book_id: '7',
        Title: 'Healing Guide',
        Author: 'Jeff',
        ISBN: '178-3-16-188410-0',
        Status: true,
        Status_Date: '08252021',
        User_id: '123'
       },
       {
        book_id: '8',
        Title: 'Classical Music',
        Author: 'Zach',
        ISBN: '378-3-16-148910-0',
        Status: false,
        Status_Date: '08292021',
        User_id: '123'
       },
       {
        book_id: '9',
        Title: 'This is merica',
        Author: 'Trump',
        ISBN: '178-3-16-148410-0',
        Status: false,
        Status_Date: '08252021',
        User_id: '123'
       },
       {
        book_id: '10',
        Title: 'Meantime in russia',
        Author: 'Putin',
        ISBN: '378-3-16-148410-0',
        Status: false,
        Status_Date: '08292021',
        User_id: '123'
       },
       {
        book_id: '11',
        Title: 'Harry potter',
        Author: 'Not very oleg',
        ISBN: '178-3-16-148410-0',
        Status: false,
        Status_Date: '08252021',
        User_id: '123'
       }
    
]

console.log('check for id', books[0].book_id)



  return (
    <>
      <Router>
        <Switch>
          <Route path="/books/:id">
            <Book props={books}/>
          </Route>
          <Route path="/">
            <Home props={books}/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
