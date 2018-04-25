import React, { Component } from 'react'

let buyersReviews = [{
  name: "Gary",
  reviews: ["This is awesome.","Dont buy this"]
},
{
  name: "Paul",
  reviews: ["This is worth my money.","Sugoi!"]
},
{
  name: "Ash",
  reviews: ["This is lame.","Yatta!"]
},
{
  name: "Misty",
  reviews: ["This is better be good.","Dope. Would cope."]
},
{
  name: "Brock",
  reviews: ["This is solid.","Take my money and shut up!"]
}]

let formatReviews = () => {
  return(
    <div>
      
    </div>
  )
}

class ItemsReviews extends Component{
  render(){
      return(
        <div>{formatReviews(buyersReviews.[this.props.itemId])}</div>
      );
  }
}

export default ItemsReviews