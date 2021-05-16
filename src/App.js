import React from 'react';
import './App.css';
import Books from './Components/books.js';





class App extends React.Component {

  constructor(){
    super();
    this.state = {
      books: [],
      discounted: false,
    };
  }

  

  clickHandler() {
    fetch('https://booklist.fgfdev.com.au/books')
      .then(res => res.json())
      .then((data) => {
        this.setState({ books: data, discounted: false })
      });
  }
  

  applyDiscount () {
    let booklist = (this.state.books);
    booklist.forEach((book) => {
      if (book.BookCategory === 'Crime'){
        book.newprice = ((book.Cost*0.95).toFixed(2));       
      } else {
        book.newprice = (book.Cost);
      }
    });

    console.log(this.state.books);
    this.setState( {books:booklist, discounted: true} );
  }


  render (){
    return (
      <div className="card">
              <Books books={this.state.books} discounted={this.state.discounted}/>
              <button onClick={()=> this.clickHandler()}>Refresh booklist</button>
              <button onClick={()=> this.applyDiscount()}>Apply discount</button>
      </div>
    );
  }
}


export default App;
