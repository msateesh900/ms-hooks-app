import React, { useState, useEffect } from "react";

function ReactuseEffectWithDifferentDepenedencies() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
    // == > The above function will make the counter increment and it will not work for all the time
    // setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("counter setting for every second using tick function");
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    //   }, []);
    // ==> This will makes dependency issues the count will be incremented only once we need to
    // to make sure the count incremented after every second
  }, [count]);

  return (
    <div>
      <h3>React useEffect With Different Depenedencies</h3>
      {count}
    </div>
  );
}

export default ReactuseEffectWithDifferentDepenedencies;
