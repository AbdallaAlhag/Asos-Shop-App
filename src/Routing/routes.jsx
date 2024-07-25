import Home from "../pages/Home";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Men",
        element: <Men />,
      },
];

export default routes;
