import React from "react";
import {
  UserContext,
  ChannelContext,
} from "./CommunicationusingReactuseContextHook";

function ComponentF() {
  return (
    <div>
      <h3>Here we used render props for consuming context values</h3>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user Context value is <b>{user}</b>, Channel Context Value
                    is:<b>{channel}</b>
                    {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
