import React from "react";

const UserInfo = ({
  user,
  repos,
  onReset,
  hideReset,
  stars,
  totalScore,
  showFollowers,
}) => {
  return (
    <div className="user-section">
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.login}</h2>
      <div className="user-info">
        {showFollowers && <p>🫂 Followers: {user.followers}</p>}
        {repos && <p>🌟 Repositories stars: {stars}</p>}
        {repos && <p className="score">🏁 Total score: {totalScore}</p>}
      </div>
      {!hideReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default UserInfo;
