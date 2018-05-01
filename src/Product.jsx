import React from "react";
import logo from "./logo.svg";
import { CartContext } from "./CartContext";

export default props => (
  <CartContext.Consumer>
    {cart => (
      <div className="card" style={{ margin: "1em" }}>
        <div className="card-image cyan lighten-5">
          <img src={logo} />
        </div>
        <div className="card-content">
          <span className="new badge indigo lighten-2" data-badge-caption="in cart">
            {cart.items.filter(p => p.id === props.id).length || 'none'}
          </span>
          <h4 className="card-title">{props.title}</h4>

          <div>
            <div className="card-action">
              <button
                className="waves-effect waves-light btn deep-purple darken-1"
                onClick={() => cart.onAddToCart(props)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </CartContext.Consumer>
);
