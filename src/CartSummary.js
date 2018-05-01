import React from "react";
import { CartContext } from "./CartContext";

export default props => (
  <div>
    <CartContext.Consumer>
      {cart => (
        <div>
          <h4>{cart.items.length || 'No'} items in cart</h4>
          <ul className="cart-summary-items">
            {cart.items.map((p, i) => (
              <li className="cart-item">
                {p.title}{" "}
                <button
                  className="waves-effect waves-light btn-small pink darken-2"
                  onClick={() => cart.onRemoveFromCart(i)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </CartContext.Consumer>
  </div>
);
