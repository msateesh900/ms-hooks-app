import React, { useReducer } from "react";

// useReducer is used for state management
// It is alternative to useState
// Diff b/w useState & useReducer=> useState is build using useReducer
// When to use useState and useReducer => Check later

// what is reducer in JS
// Reduce => The reduce() method executes a reducer function (that you provide)
//           on each element of the array, resulting in single output value

// reducer Example:

// const array = [1,2,3,4,5];
// const reducer=(accumalator,currentValue)=>accumalator+currentValue

// console.log(array.reduce(reducer));
// console.log(array.reduce(reducer,5));

// In JS =>array.reduce(reducer,initialValue) In React=>useReducer(reducer, initalState)
// In JS =>singleValue=reducer(accumalator,itemValue) In React=>newState=reducer(currentState,action)
// In JS =>reduce method returns single value In React=>useReducer returns pair of values[newState,dispatch]

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
function SimpleCountUsingReactuseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Count Example using React useReducer Hook</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>&nbsp;
      <button onClick={() => dispatch("decrement")}>Decrement</button>&nbsp;
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>Count Using useReducer:{count}</div>
    </div>
  );
}

export default SimpleCountUsingReactuseReducer;
