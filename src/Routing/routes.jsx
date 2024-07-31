import Women from "../pages/Women";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";
import Shop from "../pages/Shop";

const routes = [
    {
        path: "/",
        element: <Men />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Women",
        element: <Women />,
        errorElement: <ErrorPage />,
      },
        {
          path: '/Shop',
          element: <Shop />,
          errorElement: <ErrorPage />,

        }
];

export default routes;
