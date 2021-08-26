import ListItem from './ListItem.jsx'
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

function LibrarianBookBody(props) {

    let nUser = props.props[0] 

    function verifyCustomer(nUser) {
        return (typeof nUser === 'undefined' ? 'BRO' : `${nUser.user_name}`);
    }
        let nBooks = props.props[1].books
        let title = nBooks.book_title
        let author = nBooks.book_author
        let ISBN = nBooks.book_ISBN
        let status = nBooks.book_status
        let date = nBooks.book_statusDate
        let user = nBooks.book_user_id
        let id = nBooks.book_id
        let customer = nUser

        function verifyStatus(status) {
            return (status 
            
            ? (`Availablё`
                
               ) 
            : (`Not Availablё. Must bё rёturn by ${date}`))
        }
  return (
    <>
    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <h5>Book title:</h5>
            <h4>{title}</h4>
            <span>Author: {author} </span>
            <br />
            ISBN Number: {ISBN}
            <br />
            {verifyStatus(status)}
            <br />
            Checked out by {verifyCustomer(nUser)}
            <br />
            </div>
    </>
  );
}

export default LibrarianBookBody;