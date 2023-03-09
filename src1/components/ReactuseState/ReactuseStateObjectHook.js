import React, { useState } from "react";

export default function ReactuseStateObjectHook() {
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  return (
    <form>
      <h3>React useStateObjectHook</h3>
      <input
        type="text"
        value={user.firstname}
        onChange={(e) =>
          setUser({
            ...user,
            firstname: e.target.value,
          })
        }
      />
      &nbsp;
      <input
        type="text"
        value={user.lastname}
        onChange={(e) =>
          setUser({
            ...user,
            lastname: e.target.value,
          })
        }
      />
      <h2>User First Name is:{user.firstname}</h2>
      <h2>User Last Name is:{user.lastname}</h2>
      <h2>{JSON.stringify(user)}</h2>
    </form>
  );
}
