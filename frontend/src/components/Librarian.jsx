import '../App.css';
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import axios from "axios";
import { useHistory} from "react-router-dom";

function Librarian() {

const [books, setBooks] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3001/unavailable')
      .then((response) => {
          setBooks(response.data);
      });
    }, []);

  return (
    
    <>
     <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
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
          <Link to="/librarian" class="mdl-layout__tab is-active">Librarian (Admin)</Link>
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Unavailable Books</h4>
                {
            books.map((book, index) => {
                let id = book.book_id
                let title = book.book_title
                let author = book.book_author
                let ISBN = book.book_ISBN
                let status = book.book_status
                let date = book.book_statusDate
                let user = book.user_id
       
                function verifyStatus(status) {
                    return (status ? ("Available") : (`Not Available. Must be returned by ${date}`))
                }

                return ( 
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                     <h5> <Link  to={{  pathname: `/librarianbooks/${id}`, state: { books: book } }}>{title}</Link></h5>
                        <span>Author: {author}</span>
                        <br />
                        ISBN Number: {ISBN}
                        <br />
                        {verifyStatus(status)}
                        <br />
                        <hr />
                    </div>  

                )
            })
        }
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}

export default Librarian;
