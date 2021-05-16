import React from 'react';
    
const Books = ({ books, discounted }) => {

    if (discounted === true){
      return (
        <div>
          <center><h1>Books</h1></center>
          {books.map((book) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.BookCategory}</h6>
                <p className="card-text">{book.newprice}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <center><h1>Books</h1></center>
          {books.map((book) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.BookCategory}</h6>
                <p className="card-text">{book.Cost}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
};

/*const Books = ({books}) => {
    (books).forEach((book) => {
        if (book.BookCategory === 'Crime') 
    });
}*/
    
export default Books