import '../App.css';
import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

function Book() {
        const { state } = useLocation();
        let title = state.books.Title
        let author = state.books.Author
        let ISBN = state.books.ISBN
        let status = state.books.Status
        let date = state.books.Status_Date
        let user = state.books.User_id
        let id = state.books.book_id
       
        const [updatedAt, setUpdatedAt] = useState([])
        const [newID, setNewID] = useState('');

        function verifyStatus(status) {
          return (status 
          
          ? (<>Availablё 
                     <button type="button" class="mdl-button show-modal">Check Out</button>
             </>) 
          : (`Not Availablё. Plёasё check back by ${date}`))
      }

      const handleNewUser = (event) => {
        console.log('handle event worked')
        event.preventDefault()
       
          const bookUpdate = {
            User_id: newID,
          };

          axios.put('http://localhost:3001/whatever end point is gonna be hre', bookUpdate)
              .then(response => setUpdatedAt(response.data.updatedAt));
      }

console.log('check for newID', newID)






  return (
    <>
    <div classNameName="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>SDI Library Page</h3>
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <Link to="/" class="mdl-layout__tab is-active">Home Page</Link>
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Info about: {title}</h4>
                <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Book title: {title}</h5>
                  <span>Author: {author} </span>
                  <br />
                  ISBN Number: {ISBN}
                  <br />
                  {verifyStatus(status)}
                  <br />
                </div>
              </div>
            </div>
            <dialog class="mdl-dialog">
            <div class="mdl-dialog__content">
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input onChange={(event) => {setNewID(event.target.value)}}  class="mdl-textfield__input" type="text" id="sample3" />
                <label class="mdl-textfield__label" for="sample3">Enter User ID</label>
              </div>
            </form>
            </div>
            <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
              <button onClick={(event) => {handleNewUser(event)}} type="button" class="mdl-button">Submit</button>
              <button onClick="close" type="button" class="mdl-button close">Cancel</button>
            </div>
          </dialog>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn2">
              <li className="mdl-menu__item" disabled>Authors</li>
              <li className="mdl-menu__item">Michelle</li>
              <li className="mdl-menu__item">Oleg</li>
            </ul>
          </section>
        <section className="section--footer mdl-color--white mdl-grid">
        <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
          </section>
        </div>
        
       
      </main>
    </div>
    </>
  );
}

export default Book;
