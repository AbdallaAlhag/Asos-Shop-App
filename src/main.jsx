import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routing/routes";
import { CartProvider } from "./pages/Cart/CartContext";
import { SaveProvider } from "./pages/Save/SaveContext";
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <SaveProvider>
        <RouterProvider router={router} />
      </SaveProvider>
    </CartProvider>{" "}
  </React.StrictMode>
);
