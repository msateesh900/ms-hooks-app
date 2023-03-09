import React, { useState, useMemo } from "react";

function PerformanceOptimizationUsingReactuseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h3>Performance Optimization Using Reactuse MemoHook</h3>
      <div>
        <button onClick={incrementOne}>Counter One-{counterOne}</button>
        {isEven ? "Even" : "Odd"}
        <br />
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two-{counterTwo}</button>
      </div>
    </div>
  );
}

export default PerformanceOptimizationUsingReactuseMemoHook;
