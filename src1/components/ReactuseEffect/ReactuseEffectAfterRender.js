import React, { useState, useEffect } from "react";

function ReactuseEffectAfterRender() {
  const [count, setCount] = useState(0);

  // This will explains us how useEffect render ui after and update
  //   (combination of componentDidMount and componentDidUpdate)

  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });

  return (
    <div>
      <h3>ReactuseEffect After Render</h3>
      <button onClick={() => setCount(count + 1)}>count{count}</button>
    </div>
  );
}

export default ReactuseEffectAfterRender;
