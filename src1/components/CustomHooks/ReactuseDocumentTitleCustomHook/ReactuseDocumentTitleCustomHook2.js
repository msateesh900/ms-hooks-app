import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle/useDocumentTitle";

function ReactuseDocumentTitleCustomHook2() {
  const [count, setCount] = useState(0);
  //   useDocumentTitle(count); // Using custom Hook created by us
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count2-{count}
      </button>
    </div>
  );
}

export default ReactuseDocumentTitleCustomHook2;
