import Women from "../pages/Women";
import Men from "../pages/Men";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <Men />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Women",
        element: <Women />,
      },
];

export default routes;
