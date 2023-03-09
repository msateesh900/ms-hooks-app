import React from "react";

function Title() {
  console.log("Rendering Title");
  return <div>use Call back</div>;
}

export default React.memo(Title);
