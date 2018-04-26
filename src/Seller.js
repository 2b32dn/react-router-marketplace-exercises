import React, { Component } from 'react';
import './App.css';


// let sellers = {
//   '1': {
//     name: "Jack Frost",
//     rating: "5 stars"
//   },
//   '2': {
//     name: "Jack Frost",
//     rating: "5 stars"
//   },
//   '2': {
//     name: "Jack Frost",
//     rating: "5 stars"
//   },
// }

let sellers = [{
  name: "Jack Frost",
  rating: "5 stars"
},
{
  name: "Hank Green",
  rating: "2 stars"
},
{
  name: "Jack Ma",
  rating: "5 stars"
}
]

let formatSeller = (seller) => {
  return (
    <div className="card center">
      <div>
        <div>{seller.name}</div>
        <div>{seller.rating}</div>
      </div>
    </div>)
}

class Seller extends Component {
  render() {
    return (
      <div>{formatSeller(sellers[this.props.id])}</div>
    );
  }
}

export default Seller;
