import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComplexCountUsingReactuseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Complex Count Using React useReducer Hook</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>Count1: {count.firstCounter}</p>
      <p>Count2: {count.secondCounter}</p>
    </div>
  );
}

export default ComplexCountUsingReactuseReducerHook;
