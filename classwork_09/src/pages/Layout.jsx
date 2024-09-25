import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />

      <aside>
        <input type="text"></input>
      </aside>

      <main>
        {/* children */}
        <Outlet />
        {/* children */}
      </main>

      <footer></footer>
    </>
  );
}
