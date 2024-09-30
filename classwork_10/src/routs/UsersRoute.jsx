import React from "react";
import UsersList from "./../components/UsersList/UsersList";
import NavigateButton from "./../components/NavigateButton/NavigateButton";

function UsersRoute() {
  return (
    <div>
      <h3>UsersRoute</h3>
      <UsersList />
      <NavigateButton title="Back" path={`/`} />
    </div>
  );
}

export default UsersRoute;
