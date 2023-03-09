import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle/useDocumentTitle";

function ReactuseDocumentTitleCustomHook1() {
  const [count, setCount] = useState(0);
  //   useDocumentTitle(count); // Using custom Hook created by us
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count1-{count}
      </button>
    </div>
  );
}

export default ReactuseDocumentTitleCustomHook1;
