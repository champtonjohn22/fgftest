import React from 'react';

const Books = ({ books, discounted, badrequest }) => {
  if (badrequest === true) {
    return (
      <div>
        <center><h1>Books</h1></center>
        <center><h2>Oops, there was an error retrieving the booklist, please try again.</h2></center>
      </div>
    )
  } else if (discounted === true){
      return (
        <div>
          <center><h1>Books</h1></center>
          {books.map((book) => (
            <div>
              <table className="table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3">{book.Title}</td>
                    <td>{book.BookCategory}</td>
                    <td>{(book.newprice+book.newprice*0.10).toFixed(2)}</td>
                    <td>{((book.newprice)*0.10).toFixed(2)}</td>
                  </tr>
                </tbody>                             
              </table>
            </div>

            /*<div className="card">
              <div className="card-body">
                <h2 className="card-title" >{book.Title}</h2>
                <h3 className="card-subtitle mb-2 text-muted" >{book.BookCategory}</h3>
                <p className="card-text" >Price: {(book.newprice).toFixed(2)}</p>
                <p className="card-text" >10% Tax: {((book.newprice)*0.10).toFixed(2)}</p>
                <p className="card-text" >Total Price: {(book.newprice+book.newprice*0.10).toFixed(2)}</p>
              </div>
            </div>*/
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
                <h2 className="card-title">{book.Title}</h2>
                <h3 className="card-subtitle mb-2 text-muted" >{book.BookCategory}</h3>
                <p className="card-text" >Price: {(book.Cost).toFixed(2)}</p>
                <p className="card-text" >10% Tax: {((book.Cost)*0.10).toFixed(2)}</p>
                <p className="card-text" >Total Price: {(book.Cost+book.Cost*0.10).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
};

export default Books