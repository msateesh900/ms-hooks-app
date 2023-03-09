import React, { useEffect, useRef } from "react";

function ReactuseRefToFocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <h3>React useRef to focus input</h3>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default ReactuseRefToFocusInput;
