import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Checkout from "./components/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "items", element: <Shop /> },
      { path: "items/:item", element: <Item /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
