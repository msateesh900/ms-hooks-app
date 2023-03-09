import React, { useState, useEffect } from "react";

function RunReactuseEffectOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`mouse Event`);
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    // Added for cleanupWithReactuseEffect.js file
    return () => {
      console.log("unmountin mouse event from DOM");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <h3>Run React useEffect only once</h3>
      <h4>
        Hooks X:{x} Y:{y}
      </h4>
    </div>
  );
}

export default RunReactuseEffectOnlyOnce;
