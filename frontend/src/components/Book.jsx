import '../App.css';
import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Book() {
        const { state } = useLocation();
        let history = useHistory();

        let title = state.books.book_title
        let author = state.books.book_author
        let ISBN = state.books.book_ISBN
        let status = state.books.book_status
        let date = state.books.book_statusDate
        let user = state.books.user_id
        let id = state.books.book_id

        const [updatedAt, setUpdatedAt] = useState([])
        const [newID, setNewID] = useState('');

        function verifyStatus(status) {
          return (status 
          
          ? (`Availablё`
              
             ) 
          : (`Not Availablё. Plёasё check back by ${date}`))
      }

      function showCheckout(status) {
        return (status 
        
        ? (<><div class="mdl-dialog__content">
        <form action="#">
          <h3>Checkout</h3>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label>Your ID
            <input defaultValue="" onChange={(event) => {setNewID(event.target.value)}}  class="mdl-textfield__input" type="text" id="sample3" />
            </label>
          </div>
          <button onClick={(event) => {handleNewUser(event)}} type="button" class="mdl-button">Submit</button>
        </form>
      </div></>
            
           ) 
        : (``))
    }

      const handleNewUser = (event) => {
        console.log('handle event worked')   
          const bookUpdate = {
            user_id: newID,
            book_status: false,
            book_statusDate: "September 9"
          };

          axios.put(`http://localhost:3001/books/${id}/checkout`, bookUpdate)
              .then(response => setUpdatedAt(response.data.updatedAt));

        
              history.push('/')
              window.location.reload();
  
      }
 

  return (
    
    <>
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3 id={id}>SDI Library Page</h3>
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
                <h4 className="mdl-cell mdl-cell--12-col">Information:</h4>
                
                <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Book title:</h5>
                  <h4>{title}</h4>
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
            
          </dialog>
          {showCheckout(status)}
           
          </section>
        
        </div>
      </main>
    </div>
    </>
  );
}

export default Book;
