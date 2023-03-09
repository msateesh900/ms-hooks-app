import React, { createContext } from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();

export const ChannelContext = React.createContext();

function CommunicationusingReactuseContextHook() {
  return (
    <div>
      {/* React context provides a way to pass data through the component tree without having 
      to pass props down manullayat every level */}
      <h3>Basic communication b/w components using ReactuseContext</h3>
      <p>The value provided using UserContext using React useContext Hook</p>
      <UserContext.Provider value={"Sateesh"}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default CommunicationusingReactuseContextHook;
