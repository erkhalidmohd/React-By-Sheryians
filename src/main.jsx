import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/Products", element: <Products/> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <Login /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);