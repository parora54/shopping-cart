import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState({});

  return (
    <>
      <Navbar />
      <div id="body-section-style">
        <Outlet context={[cart, setCart]} />
      </div>
    </>
  );
}

export default App;
