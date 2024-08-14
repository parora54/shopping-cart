import PropTypes from "prop-types";
import sampleData from "./sampleData";

//sample data
const productList = sampleData;

const Product = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-details">
        <h2 className="item-title">{product.name}</h2>
        <p className="item-price">${product.price.toFixed(2)}</p>
        <button className="item-button">Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default function Shop() {
  return (
    <div className="item-list">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
