import React from "react";
import Product from "./Product";

export default ({ title, products }) => (
  <div>
    <h2>{title}</h2>
    <section className="category-section">
      {products && products.map(Product)}
    </section>
  </div>
);
