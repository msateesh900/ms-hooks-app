import { useState } from "react";

export default function ReactuseState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementCountBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      {/* <header className="App-header"> */}
      <h3>React useState hook for Counter</h3>
      {/* </header> */}
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
      &nbsp;
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement Count
      </button>
      &nbsp;
      <button onClick={() => setCount(initialCount)}>Reset Count</button>
      <button onClick={incrementCountBy5}>IncrementCountBy5</button>
      <p>Count:{count}</p>
    </div>
  );
}
