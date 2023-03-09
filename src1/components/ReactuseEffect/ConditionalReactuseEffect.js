import React, { useState, useEffect } from "react";

function ConditionalReactuseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("rerender the page");
    // document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h3>Conditionally render using React use Effect</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      &nbsp;
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
}

export default ConditionalReactuseEffect;
