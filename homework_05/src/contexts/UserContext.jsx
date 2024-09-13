import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [battleStarted, setBattleStarted] = useState(false);
  const [battleFinished, setBattleFinished] = useState(false);

  const addUser = (id, data) => {
    setUsersData((prevState) =>
      prevState.map((user) => (user.id === id ? { ...user, data } : user))
    );
  };

  const resetUser = (id) => {
    setUsersData((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, data: null, repos: null } : user
      )
    );
  };

  const restartBattle = () => {
    setBattleStarted(false);
    setBattleFinished(false);
  };

  return (
    <UserContext.Provider
      value={{
        usersData,
        setUsersData,
        battleStarted,
        setBattleStarted,
        battleFinished,
        setBattleFinished,
        addUser,
        resetUser,
        restartBattle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
