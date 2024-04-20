import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import IndexHome from "./routes/Home/index.tsx";
import IndexSobremesas from "./routes/Sobremesas/index.tsx";
import IndexSalgados from "./routes/Salgados/index.tsx";
import IndexKits from "./routes/Kits/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <IndexHome /> },
      { path: "/sobremesas", element: <IndexSobremesas /> },
      { path: "/salgados", element: <IndexSalgados /> },
      { path: "/kits", element: <IndexKits /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
