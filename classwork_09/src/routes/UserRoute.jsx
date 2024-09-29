import React from "react";
import UserCard from "./../components/UserCard/UserCard";
import NavigateButton from "../components/NavigateButton/NavigateButton";

function UserRoute() {

  return (
    <div>
      <h3>User Route</h3>
      <UserCard />
      <NavigateButton title={"Back"} path={"/users"}/>
    </div>
  );
}

export default UserRoute;
