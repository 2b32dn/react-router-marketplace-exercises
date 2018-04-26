import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import ItemsReviews from './ItemsReviews.js'
import './App.css';

let items = [{
  description: "Nice boats. 50% off. wow.",
  price: 10000 + '$',
  stock: 5 + " remanining in stock",
  image: "boat.png",
  sellerId: 0,
  itemId: 0
},
{
  description: "Lawn chairs",
  price: 50 + '$',
  stock: 10000 + " remanining in stock",
  image: "lawnchair.jpg",
  sellerId: 1,
  itemId: 1
},
{
  description: "Gucci logo",
  price: 150 + '$',
  stock: 5000 + " remanining in stock",
  image: "gucci.png",
  sellerId: 2,
  itemId: 2
},
{
  description: "Subaru Brz",
  price: 35000 + '$',
  stock: 50 + " remanining in stock",
  image: "subaru.jpg",
  sellerId: 2,
  itemId: 3
},
{
  description: "MTG Alpha Black Lotus",
  price: 40000 + '$',
  stock: 46 + " remanining in stock",
  image: "blacklotus.jpg",
  sellerId: 2,
  itemId: 4
}
]

let renderAllItems = () => {
  return items.map(item => (<Item
    price={item.price}
    stock={item.stock}
    sellerId={item.sellerId}
    itemId={item.itemId}
    imageLocation={item.image}
    description={item.description} />))
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)
}

let renderItemDetails = routerData => {
  return (<ItemsReviews itemId={routerData.match.params.itemId} />)
}



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
          <Route exact={true} path='/itemdetails/:itemId' render={renderItemDetails}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
