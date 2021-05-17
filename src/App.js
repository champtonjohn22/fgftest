import React from 'react';
import './App.css';
import Books from './Components/books.js';
import Totals from './Components/totals.js';



const percentoff = 5;                                   //this is the discount amount in percentage.
const url = 'https://booklist.fgfdev.com.au/books';     //API endpoint.
const salecat = 'Crime';                                //the book category receiving the discount.

class App extends React.Component {

  constructor(){  //constructor method, set initial states.
    super();
    this.state = {
      books: [],
      discounted: null,
      badrequest: null,
      initial: true,
      nodiscount: true,
    };
  }

  clickHandler() {  //this function makes the API call, converts it to JSON. It is called by the refresh booklist button.
    fetch(url)   
      .then(res => res.json())
      .then((data) => {
        this.setState({ books: data, discounted: false, badrequest: false, initial: false, nodiscount: false })  //converts to JSON and sets it as the books state. Also sets other various states and the setState method triggers a component refresh.
      })
      .catch(() => {
        this.setState({ badrequest: true, initial: false, nodiscount: true}); //setState triggers a component refresh to show an error page, when the API call fails.
        console.log('There was an error retrieving the booklist');  //logs an error when the API call fails.
      });
  }

  applyDiscount() {  //applies a discount to the crime novel. Called by the apply discount button.
    let booklist = (this.state.books);
    booklist.forEach((book) => {
      if (book.BookCategory === salecat){
        book.newprice = (book.Cost*((100-percentoff)/100));       
      } else {
        book.newprice = (book.Cost);  //if a book does not receive a discount, its new price is the same as old price. the new price property is still added.
      }
    });
    this.setState( {books:booklist, discounted: true, initial: false, nodiscount: false} );  //setState triggers a refresh of the table
  }


  render() {  //renders the app page
    const noDisc = this.state.nodiscount;
    return (
      <div className="vh-100 bg-dark text-light">
              <Books books={this.state.books} discounted={this.state.discounted} badrequest={this.state.badrequest} initial={this.state.initial}/>
              <Totals books={this.state.books} discounted={this.state.discounted} badrequest={this.state.badrequest}/>
              <div className="container d-flex flex-row justify-content-center">
                <button className="btn btn-success" onClick={()=> this.clickHandler()}>REFRESH BOOKLIST</button>
                  {noDisc
                      ? <div></div>
                      : <button className="btn btn-primary" onClick={()=> this.applyDiscount()}>APPLY DISCOUNT</button>
                  }
              </div>          
      </div>
    );
  }
}


export default App;
