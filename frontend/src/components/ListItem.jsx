import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function ListItem(props) {
    let books = props.props.props
  return (
    <>
        {
            books.map((book, index) => {
                let title = book.Title
                let author = book.Author
                let ISBN = book.ISBN
                let status = book.Status
                let date = book.Status_Date
                let user = book.User_id
                let id = book.book_id
                
                function verifyStatus(status) {
                    return (status ? ("Available") : (`Not Available. Please check back by ${date}`))
                }
                
                return ( 

                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                        <h5> <Link  to={{  pathname: `/books/${id}`, state: { books: book } }}>{title}</Link></h5>
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
    </>
    );
    }

export default ListItem;
