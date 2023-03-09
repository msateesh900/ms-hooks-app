import React from "react";
import useCounter from "./useCounterCustomHook/useCounter";

function Counter1() {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      Count1 ==== {count}
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1;
