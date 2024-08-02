import Women from "../pages/Women";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

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
    // path: "/Shop",
    // element: <Shop />,
    // errorElement: <ErrorPage />,
    path: "/Shop/:category",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/Checkout/:category", 
    element: <Checkout />, 
    errorElement: <ErrorPage /> },
];

export default routes;
