import React, { useState } from "react";

const UserForm = ({ onSubmit, label }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{`Choose ${label} username`}</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={label}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
