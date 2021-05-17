import React from 'react';

const Books = ({ books, discounted, badrequest, initial }) => {

  if (badrequest === true) {
    return (
      <div>
        <center><h1>Books</h1></center>
        <center><h2>Oops, there was an error retrieving the booklist, please try again.</h2></center>
      </div>
    )
  } else if (initial === true) {
    return (
      <div className="container d-flex flex-row flex-grow-3 justify-content-center">
        <h1>Welcome to the Fair Go Finance Book Recommendation App</h1>
      </div>
    )
  } else if (discounted === true){
      return (
        <div>
          <center><h1>Books</h1></center>
          <div className="container d-flex flex-row flex-grow-3 justify-content-center">
              <table className="table-bordered">
                <thead>
                  <tr>
                    <th scope="col" colSpan="7">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Tax</th>
                  </tr>
                </thead>
          {books.map((book) => (          
                <tbody>
                  <tr>
                    <td colSpan="7">{book.Title}</td>
                    <td>{book.BookCategory}</td>
                    <td>{(book.newprice+book.newprice*0.10).toFixed(2)}</td>
                    <td>{((book.newprice)*0.10).toFixed(2)}</td>
                  </tr>
                </tbody>))}                             
              </table>
            </div>                 
        </div>
      );
    } else {
      return (
        <div >
          <center><h1>Books</h1></center>
          <div className="container d-flex flex-row flex-grow-3 justify-content-center">
            <table className="table-bordered">
                <thead>
                  <tr>
                    <th scope="col" colSpan="7">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Tax</th>
                  </tr>
                </thead>
          {books.map((book) => (          
                <tbody>
                  <tr>
                    <td colSpan="7">{book.Title}</td>
                    <td>{book.BookCategory}</td>
                    <td>{(book.Cost+book.Cost*0.10).toFixed(2)}</td>
                    <td>{((book.Cost)*0.10).toFixed(2)}</td>
                  </tr>
                </tbody>))}                             
              </table>
            </div>                   
        </div>
      );
    }
};

export default Books