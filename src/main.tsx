import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import IndexHome from "./routes/Home/index.tsx";
import IndexPedidos from "./routes/Pedidos/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <IndexHome /> },
      { path: "/pedidos", element: <IndexPedidos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
