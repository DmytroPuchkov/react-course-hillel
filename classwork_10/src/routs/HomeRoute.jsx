import React from "react";
import SelectUsersSort from "./../components/SelectUsersSort/SelectUsersSort";
import NavigateButton from "./../components/NavigateButton/NavigateButton";

function HomeRout() {
  return (
    <div>
      <h3>HomeRoute</h3>
      <SelectUsersSort />
      <NavigateButton title="Go to Users List Route" path="/users/" />
    </div>
  );
}

export default HomeRout;
