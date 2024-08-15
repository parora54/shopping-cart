import { useOutletContext } from "react-router-dom";

export default function Checkout() {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <div>Your cart is:</div>
      <div>{JSON.stringify(cart, null, 2)}</div>
    </>
  );
}
