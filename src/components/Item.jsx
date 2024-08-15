import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item() {
  const { item } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item}`, { mode: "cors" })
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="item-page">
      <div className="item-image-container">
        <Link to="../items">
          <button className="bootn">Back to Shop</button>
        </Link>
        <img src={product.image} alt={product.title} className="item-image" />
      </div>
      <div className="item-info">
        <h1 className="item-title">{product.title}</h1>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description}</p>
      </div>
    </div>
  );
}
