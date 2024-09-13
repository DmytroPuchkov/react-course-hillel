import React, { useContext, useEffect } from "react";
import userService from "../services/user";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";
import { UserContext } from "../contexts/UserContext";
import { usersConfig } from "../constants/constants";
import { userStatus } from "../constants/constants";

const Rumble = () => {
  const {
    usersData,
    setUsersData,
    battleStarted,
    setBattleStarted,
    battleFinished,
    setBattleFinished,
    addUser,
    resetUser,
    restartBattle,
  } = useContext(UserContext);

  useEffect(() => {
    setUsersData(
      usersConfig.map((user) => ({
        ...user,
        data: null,
        repos: null,
        fullData: false,
      }))
    );
  }, [setUsersData]);

  const handleUserSubmit = async (id, username) => {
    const userData = await userService.get(username);
    addUser(id, { ...userData, fullData: false });
  };

  const handleBattle = async () => {
    setBattleStarted(true);

    const updatedUsersData = await Promise.all(
      usersData.map(async (user) => {
        if (user.data) {
          const repos = await userService.getRepos(user.data.login);
          const fullUserData = await userService.get(user.data.login);
          return { ...user, data: { ...fullUserData, fullData: true }, repos };
        }
        return user;
      })
    );

    setUsersData(updatedUsersData);
    setBattleFinished(true);
  };

  const handleRestart = () => {
    setUsersData(
      usersConfig.map((user) => ({
        ...user,
        data: null,
        repos: null,
        fullData: false,
      }))
    );
    restartBattle();
  };

  const calculateStars = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  };

  const getTotalScore = (followers, stars) => {
    return followers + stars;
  };

  return (
    <div>
      <h1>Let's Get Ready to Rumble 🥊</h1>
      <div className="users-container">
        {usersData.map((user) => {
          const totalScore = user.repos
            ? getTotalScore(
                user.data?.followers || 0,
                calculateStars(user.repos)
              )
            : 0;

          return (
            <div className="user-block" key={user.id}>
              {battleFinished && (
                <h2>
                  {totalScore ===
                  Math.max(
                    ...usersData.map((u) =>
                      getTotalScore(
                        u.data?.followers || 0,
                        calculateStars(u.repos || [])
                      )
                    )
                  )
                    ? userStatus.winner
                    : userStatus.loser}
                </h2>
              )}
              {user.data ? (
                <UserInfo
                  user={user.data}
                  repos={user.repos}
                  onReset={() => resetUser(user.id)}
                  hideReset={battleStarted}
                  stars={user.repos ? calculateStars(user.repos) : 0}
                  totalScore={user.repos ? totalScore : 0}
                  showFollowers={user.data.fullData}
                />
              ) : (
                <UserForm
                  onSubmit={(username) => handleUserSubmit(user.id, username)}
                  label={user.label}
                />
              )}
            </div>
          );
        })}
      </div>

      {usersData.every((user) => user.data) && !battleStarted && (
        <div className="centered">
          <button onClick={handleBattle}>Battle!</button>
        </div>
      )}

      {battleFinished && (
        <div className="centered">
          <button onClick={handleRestart}>Restart 🔄</button>
        </div>
      )}
    </div>
  );
};

export default Rumble;
