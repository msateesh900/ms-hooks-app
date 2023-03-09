import React, { useContext } from "react";
import ComponentF from "./ComponentF";

import {
  UserContext,
  ChannelContext,
} from "./CommunicationusingReactuseContextHook";
function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h3>Communication using useContext Hook</h3>
      <p>
        User:<b>{user}</b>- Channel:<b>{channel}</b>
      </p>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
