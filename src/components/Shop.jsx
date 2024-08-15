import PropTypes from "prop-types";
// import sampleData from "./sampleData";
import { useEffect, useState, useCallback } from "react";
import { useOutletContext } from "react-router-dom";

//sample data
// const productList = sampleData;

const Product = ({ product, addToCart }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-details">
        <h2 className="item-title">{product.title}</h2>
        <p className="item-price">${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className="item-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

export default function Shop() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useOutletContext();

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      // Check if product is already in the cart
      if (updatedCart[product.title]) {
        // Update quantity and retain price
        updatedCart[product.title].quantity += 1;
      } else {
        // Add new product with initial quantity of 1
        updatedCart[product.title] = {
          quantity: 1,
          price: product.price.toFixed(2),
        };
      }

      return updatedCart;
    });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => setProductList(json));
  }, []);

  return (
    <div className="item-list">
      {productList.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
