import React, { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppContext from "./contexts/AppContext";

import Layout from "./pages/Layout";
import HomeRoute from "./routs/HomeRoute";
import UsersRoute from "./routs/UsersRoute";

import { reducer, initArgs } from "./store/reducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
  const [state, dispatch] = useReducer(reducer, initArgs);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
