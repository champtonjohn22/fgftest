import React from 'react';

const Totals = ({ books, discounted, badrequest }) => {
    let total = 0;
    let subtotal = 0;
    let tax = 0;
    let savings = 0;
    if (badrequest === true || badrequest === null) {
        return (
            <div></div>
        )
    } else if (discounted === false) {
        books.forEach((book) => {
            total = total+book.Cost+book.Cost*0.10;
            subtotal = subtotal+book.Cost;
            tax = tax+book.Cost*0.10;
        })
        return (
            <div>
                <h2>Subtotal: {subtotal.toFixed(2)}</h2>
                <h2>Tax: {tax.toFixed(2)}</h2>
                <h1>Total Price: {total.toFixed(2)}</h1>
            </div>
        )
    } else {
        books.forEach((book) => {
            total = total+book.newprice+book.newprice*0.10;
            subtotal = subtotal+book.newprice;
            tax = tax+book.newprice*0.10;
            savings = savings+(book.Cost-book.newprice);
        })
        return (
            <div>
                <h2>Subtotal: {subtotal.toFixed(2)}</h2>
                <h2>Tax: {tax.toFixed(2)}</h2>
                <h2>Savings: -{savings.toFixed(2)}</h2>
                <h1>Total Price: {total.toFixed(2)}</h1>
            </div>
        )
    }
    
}

export default Totals