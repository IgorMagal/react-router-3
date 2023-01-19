import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", name: "product-1", text: "this is product 1" },
  { id: "p2", name: "product-2", text: "this is product 2" },
  { id: "p3", name: "product-3", text: "this is product 3" },
  { id: "p4", name: "product-4", text: "this is product 4" },
  { id: "p5", name: "product-5", text: "this is product 5" },
  { id: "p6", name: "product-6", text: "this is product 6" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {PRODUCTS.map((prod) => {
          return (
            <li key={prod.id + prod.name}>
              <Link to={prod.id}>{prod.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;
