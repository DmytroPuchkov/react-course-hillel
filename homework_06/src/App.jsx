import React, { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppContext from "./AppContext.jsx";

import Layout from "./pages/Layout.jsx";
import HomeRoute from "./routes/HomeRoute.jsx";
import CountriesRoute from "./routes/CountriesRoute.jsx";
import CountryRoute from "./routes/CountryRoute.jsx";

import { reducer, initArgs } from "./store/reducer.js";

import "./App.css";

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
        path: "/countries",
        element: <CountriesRoute />,
      },
      {
        path: "/countries/:countryName",
        element: <CountryRoute />,
      },
    ],
  },
]);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initArgs);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
