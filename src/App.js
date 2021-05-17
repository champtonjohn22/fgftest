import React from 'react';
import './App.css';
import Books from './Components/books.js';
import Totals from './Components/totals.js';

const percentoff = 5;                                   //this is the discount amount in percentage
const url = 'https://booklist.fgfdev.com.au/books';     //API endpoint
const salecat = 'Crime';                                //the book category receiving the discount

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      books: [],
      discounted: false,
      badrequest: null,
      initial: null,
    };
  }

  clickHandler() {
    fetch(url)   
      .then(res => res.json())
      .then((data) => {
        this.setState({ books: data, discounted: false, badrequest: false })
      })
      .catch(() => {
        this.setState({ badrequest: true })
      });
  }

  applyDiscount() {
    let booklist = (this.state.books);
    booklist.forEach((book) => {
      if (book.BookCategory === salecat){
        book.newprice = (book.Cost*((100-percentoff)/100));       
      } else {
        book.newprice = (book.Cost);
      }
    });
    this.setState( {books:booklist, discounted: true} );
  }


  render() {
    return (
      <div className="card">
              <Books books={this.state.books} discounted={this.state.discounted} badrequest={this.state.badrequest}/>
              <center><button onClick={()=> this.clickHandler()}>Refresh booklist</button></center>
              <center><button onClick={()=> this.applyDiscount()}>Apply discount</button></center>
              <Totals books={this.state.books} discounted={this.state.discounted} badrequest={this.state.badrequest}/>
      </div>
    );
  }
}


export default App;
