import React, { Component } from "react";
import { CartContext } from "./CartContext";
import Category from "./Category";
import CartSummary from "./CartSummary";
import "./App.css";

const Inventory = [
  {
    title: "Fruit",
    products: [
      { id: 1, title: "Apple" },
      { id: 2, title: "Orange" },
      { id: 3, title: "Pear" },
    ],
  },
  {
    title: "Vege",
    products: [
      { id: 4, title: "Capsicum" },
      { id: 5, title: "Carrot" },
      { id: 6, title: "Mushroom" },
      { id: 7, title: "Potato" },
    ],
  },
];

class App extends Component {
  state = {
    items: [],
  };

  onAddToCart = this.onAddToCart.bind(this);
  onAddToCart(p) {
    this.setState({
      items: [...this.state.items, p],
    });
  }

  onRemoveFromCart = this.onRemoveFromCart.bind(this);
  onRemoveFromCart(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray,
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          onAddToCart: this.onAddToCart,
          onRemoveFromCart: this.onRemoveFromCart,
        }}
      >
        <div className="App">
          <header className="App-header">
            <h1>Contextual Market</h1>
            <div>
              <CartSummary />
            </div>
          </header>
          <main>{Inventory.map(Category)}</main>
        </div>
      </CartContext.Provider>
    );
  }
}

export default App;
