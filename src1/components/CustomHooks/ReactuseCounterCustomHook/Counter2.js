import React from "react";
import useCounter from "./useCounterCustomHook/useCounter";

function Counter2() {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      Count2 ==== {count}
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
