import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from "./routes/UserRoute";
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
      {
        path: "/users/:userId",
        element: <UserRoute />,
      },
      {
        path: "/users/taras/ukraine",
        element: <h1>Taras from Ukraine</h1>,
      },
      {
        path: "/users/:userName/:userCountry",
        element: <h1>Something</h1>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
