import { Link } from "react-router-dom";


function ListItem(props) {
    let books = props.props.props

  return (
    <>
        
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
