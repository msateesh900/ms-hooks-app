import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter + 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function SimpleCountUsingMultipleReducers() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Simple Count using Multiple Reducers by React useReducer Hook</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      &nbsp;
      <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
        Increment2
      </button>
      &nbsp;
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        Decrement2
      </button>
      &nbsp;
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
      <p style={{ textAlign: "center" }}>
        Count1:{count.firstCounter} using Reducer 1 <br />
        Count2:{countTwo.firstCounter} using Reducer 2
      </p>
    </div>
  );
}

export default SimpleCountUsingMultipleReducers;
