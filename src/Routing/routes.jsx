import Women from "../pages/Women";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Brand from "../pages/Brand";
import Save from "../pages/Save";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Men",
    element: <Men />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Women",
    element: <Women />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Shop/:category",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Brand/:gender",
    element: <Brand />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Checkout/:category",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Save",
    element: <Save />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
