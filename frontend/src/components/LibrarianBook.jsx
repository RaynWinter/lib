
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import LibrarianBookBody from './LibrarianBookBody.jsx'


function LibrarianBook(props) {

        const { state } = useLocation();
        let history = useHistory();

        let title = state.books.book_title
        let author = state.books.book_author
        let ISBN = state.books.book_ISBN
        let status = state.books.book_status
        let date = state.books.book_statusDate
        let user = state.books.user_id
        let id = state.books.book_id



        const [userData, setUserData] = useState([])
        useEffect(() => {
            axios.get(`http://localhost:3001/users/${user}`)
            .then((response) => {
                setUserData(response.data);
            });
          }, []);

        var demodata = []
        demodata.push(userData[0])
        demodata.push(state)


        const [updatedAt, setUpdatedAt] = useState([])
        const [newStatus, setNewStatus] = useState('');

        function verifyStatus(status) {
          return (status 
          
          ? (`Availablё`
              
             ) 
          : (`Not Availablё. Plёasё check back by ${date}`))
      }

      const handleNewUser = (event) => {
        console.log('handle event worked')   
          const bookUpdate = {
            book_status: true,
          };

          axios.put(`http://localhost:3001/books/${id}/checkout`, bookUpdate)
              .then(response => setUpdatedAt(response.data.updatedAt));
              
              history.push('/librarian')
              window.location.reload();
      }

      console.log('new value', newStatus)

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
          <Link to="/librarian" class="mdl-layout__tab is-active">Librarian (Admin)</Link>
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Information:</h4>
                <LibrarianBookBody props={demodata}/>
              </div>
            </div>
            <dialog class="mdl-dialog">
            
          </dialog>
          <div class="mdl-dialog__content">
            <form action="#">
            <h3>Update information</h3>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <div className = 'login-form'>
            <div className="form-group">
                <select onChange={(event) => {setNewStatus(event.target.value)}} id="is_super" name="roles">
                    <option disabled defaultValue="not bro">Not returned yet</option>
                    <option value="bro">Returned</option>
                </select> 
            </div>

                {/* <input defaultValue="Your ID" onChange={(event) => {setNewID(event.target.value)}}  class="mdl-textfield__input" type="text" id="sample3" />
           */}
          </div>
            </div>
            <button onClick={(event) => {handleNewUser(event)}} type="button" class="mdl-button">Submit</button>
            </form>
          </div>
           
          </section>
        
        </div>
      </main>
    </div>
    </>
  );
}

export default LibrarianBook;
