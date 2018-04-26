import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

let buyersReviews = [{
  name: "Gary",
  reviews: "This is awesome."
},
{
  name: "Paul",
  reviews: "This is worth my money."
},
{
  name: "Ash",
  reviews: "This is lame."
},
{
  name: "Misty",
  reviews: "This is better be good."
},
{
  name: "Brock",
  reviews: "Take my money and shut up!"
}]

let formatReviews = (buyer) => {
  return(
    <div>
      <div>{buyer.name}</div>
      <div>{<li>{buyer.reviews}</li>}</div>
    </div>
  )
}

class ItemsReviews extends Component{
  render(){
      return(
        <div>{formatReviews(buyersReviews[this.props.itemId])}</div>
      );
  }
}

export default ItemsReviews