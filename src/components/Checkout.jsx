import { useOutletContext } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const [cart, setCart] = useOutletContext();

  const calculateTotal = () => {
    return Object.values(cart)
      .reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="checkout-container">
        <h1 className="checkout-title">Shopping Cart</h1>
        <div className="checkout-items">
          {Object.entries(cart).map(([itemName, itemDetails]) => (
            <div key={itemName} className="checkout-item">
              <div className="item-name">{itemName}</div>
              <div className="item-quantity">
                Quantity: {itemDetails.quantity}
              </div>
              <div className="item-price">Price: ${itemDetails.price}</div>
            </div>
          ))}
        </div>
        <div className="checkout-total">
          <h2>Total Amount: ${calculateTotal()}</h2>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </>
  );
}
