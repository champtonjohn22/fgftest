import React from 'react';

const Totals = ({ books, discounted, badrequest }) => {
    let total = 0;
    let subtotal = 0;
    let tax = 0;
    let savings = 0;
    if (badrequest === true || badrequest === null) {  //no price totals are shown if the API request fails
        return (
            <div></div>
        )
    } else if (discounted === false) {  //conditionally renders the original total prices and tax
        books.forEach((book) => {
            total = total+book.Cost+book.Cost*0.10;
            subtotal = subtotal+book.Cost;
            tax = tax+book.Cost*0.10;
        })
        return (
            <div id="totalbox" className="container d-flex flex-column align-items-end">
                <p className="text-end"><b>Subtotal:</b>&nbsp;  ${subtotal.toFixed(2)}</p>
                <p className="text-end"><b>Tax:</b>&nbsp;  ${tax.toFixed(2)}</p>
                <p className="text-end"><b>Total Price:</b>&nbsp;  ${total.toFixed(2)}</p>
            </div>
        )
    } else {
        books.forEach((book) => { //conditionally renders the discounted total prices, savings and tax
            total = total+book.newprice+book.newprice*0.10;
            subtotal = subtotal+book.newprice;
            tax = tax+book.newprice*0.10;
            savings = savings+(book.Cost-book.newprice);
        })
        return (
            <div id="totalbox" className="container d-flex flex-column align-items-end">
                <p className="text-end"><b>Subtotal:</b>&nbsp;  ${subtotal.toFixed(2)}</p>
                <p className="text-end"><b>Tax:</b>&nbsp;  ${tax.toFixed(2)}</p>
                <p id="redtext" className="text-end"><b>Savings:</b>&nbsp;  -${savings.toFixed(2)}</p>
                <p className="text-end"><b>Total Price:</b>&nbsp;  ${total.toFixed(2)}</p>
            </div>
        )
    }
}

export default Totals