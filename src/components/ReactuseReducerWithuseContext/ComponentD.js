import React, { useContext } from "react";
import { CountContext } from "./ReactuseReducerWithuseContextHook";

function ComponentD() {
  const count = useContext(CountContext);
  return (
    <div>
      Component D {count.countState}&nbsp;
      <button onClick={() => count.countDispatch("increment")}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => count.countDispatch("decrement")}>
        Decrement
      </button>
      &nbsp;
      <button onClick={() => count.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
