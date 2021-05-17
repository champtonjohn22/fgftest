import React from 'react';
import errorpic from '../img/books.png';
import logo from '../img/logo.png';

const Books = ({ books, discounted, badrequest, initial }) => {

    if (badrequest === true) {  //conditionally renders the error page when the API call fails
      return (
        <div>
          <center><h1 id="errortitle">Oops.</h1></center>
          <center><img id="errorphoto" alt="errorpicture" src={errorpic}></img></center>
          <center><p id="errormsg">There was an error retrieving the booklist, please try again.</p></center>
        </div>
      )
    } else if (initial === true) {  //conditionally renders the welcome page when the app first loads
      return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img id="fgflogo" alt="logo" src={logo}></img>
          <h1 id="apptitle" className="mt-5 container d-flex flex-column align-items-center"><span>Welcome to the <span id="greentext">Fair Go Finance</span></span><span>Book Recommendation App.</span></h1>
        </div>
      )
    } else if (discounted === true){  //conditionally renders the table with discounted prices
        return (
          <div>
            <center><h1 id="pagetitle">Your Booklist</h1></center>
            <div id="tablewrapper" className="container d-flex flex-row justify-content-center table-responsive">
                <table id="tablestyle" className="table table-bordered text-white">
                  <thead id="theadcolor">
                    <tr>
                      <th scope="col" colSpan="4">Title</th>
                      <th className="text-end" scope="col">Category</th>
                      <th className="text-end" scope="col">Cost ($)</th>
                      <th className="text-end" scope="col">Tax ($)</th>
                    </tr>
                  </thead>
            {books.map((book, pos) => (          
                  <tbody key={pos}>
                    <tr>
                      <td colSpan="4">{book.Title}</td>
                      <td className="text-end">{book.BookCategory}</td>
                      <td className="text-end">{(book.newprice+book.newprice*0.10).toFixed(2)}</td>
                      <td className="text-end">{((book.newprice)*0.10).toFixed(2)}</td>
                    </tr>
                  </tbody>))}                              
                </table>     
              </div>                 
          </div>
        );
      } else {
        return (  //renders the table with the original prices
          <div>
            <center><h1 id="pagetitle">Your Booklist</h1></center>
            <div id="tablewrapper" className="container d-flex flex-row justify-content-center table-responsive">
              <table id="tablestyle" className="table table-bordered text-white">
                  <thead id="theadcolor">
                    <tr>
                      <th scope="col" colSpan="4">Title</th>
                      <th className="text-end" scope="col">Category</th>
                      <th className="text-end" scope="col">Cost ($)</th>
                      <th className="text-end" scope="col">Tax ($)</th>
                    </tr>
                  </thead>
            {books.map((book, pos) => (          
                  <tbody key={pos}>
                    <tr>
                      <td colSpan="4">{book.Title}</td>
                      <td className="text-end">{book.BookCategory}</td>
                      <td className="text-end">{(book.Cost+book.Cost*0.10).toFixed(2)}</td>
                      <td className="text-end">{((book.Cost)*0.10).toFixed(2)}</td>
                    </tr>
                  </tbody>))}                             
                </table>
              </div>                   
          </div>
        );
      }
};

export default Books