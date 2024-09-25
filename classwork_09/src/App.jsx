import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";
import ErrorRoute from "./routes/ErrorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/users",
        element: <UsersRoute />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
