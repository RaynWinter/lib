import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Component } from "react";
import { BrowserRouter} from "react-router-dom";

import LibrarianBook from "./components/LibrarianBook.jsx"
import Librarian from "./components/Librarian.jsx"
import Book from './components/Book.jsx'
import Home from './components/Home.jsx'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App(props) {

  const [books, setBooks] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3001/books/')
      .then((response) => {
          setBooks(response.data);
      });
    }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/librarian/">
            <Librarian/>
          </Route>
          <Route path="/books/:id">
            <Book props={books}/>
          </Route>


          <Route path="/librarianbooks/:id">
            <LibrarianBook props={books}/>
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
