import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div id="body-section-style">
        <Outlet />
      </div>
    </>
  );
}

export default App;
