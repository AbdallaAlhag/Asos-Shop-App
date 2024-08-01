import Women from "../pages/Women";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";
import Shop from "../pages/Shop";
import Home from "../pages/Home";

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
    path: "/Shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
