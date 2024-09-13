import React from "react";
import Rumble from "./components/Rumble";
import { UserProvider } from "./contexts/UserContext";
import "./style.css";

const App = () => {
  return (
    <UserProvider>
      <div className="centered">
        <Rumble />
      </div>
    </UserProvider>
  );
};

export default App;
