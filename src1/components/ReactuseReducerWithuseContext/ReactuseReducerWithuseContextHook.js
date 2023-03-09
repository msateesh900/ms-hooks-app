import React, { useReducer } from "react";
import ComponentC from "./ComponentC";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReactuseReducerWithuseContextHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>useReducer with useContext</h3>
      <p>Global Count:{count}</p>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default ReactuseReducerWithuseContextHook;
