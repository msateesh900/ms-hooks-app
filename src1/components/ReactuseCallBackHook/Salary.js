import React from "react";

function Salary({ text, salary }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} --- {salary}
    </div>
  );
}

export default React.memo(Salary);
