import React, { useContext } from "react";
import SelectUsersSort from "./../components/SelectUsersSort/SelectUsersSort";
import NavigateButton from "./../components/NavigateButton/NavigateButton";

import AppContext from "../contexts/AppContext";

export default function HomeRout() {
  const { sortUsers } = useContext(AppContext);

  return (
    <div>
      <h3>HomeRoute</h3>
      <SelectUsersSort />
      <br />
      <br />
      <NavigateButton title={`Go to Users List Route & Sort by ${sortUsers}`} path={`/users?sort=${sortUsers}`} />
    </div>
  );
}
