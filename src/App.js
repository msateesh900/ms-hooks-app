import React, { useState } from "react"
import "./App.css"
import ReactuseState from "./components/ReactuseState/ReactuseStateHook"
import DataFetchReactuseEffectHook from "./components/ReactuseEffect/DataFetchReactuseEffectHook"
import ReactuseStateObjectHook from "./components/ReactuseState/ReactuseStateObjectHook"
import ReactuseStateArrayHook from "./components/ReactuseState/ReactuseStateArrayHook"
import ReactuseEffectAfterRender from "./components/ReactuseEffect/ReactuseEffectAfterRender"
import ConditionalReactuseEffect from "./components/ReactuseEffect/ConditionalReactuseEffect"
import RunReactuseEffectOnlyOnce from "./components/ReactuseEffect/RunReactuseEffectOnlyOnce"
import CleanupWithReactuseEffect from "./components/ReactuseEffect/CleanupWithReactuseEffect"
import ReactuseEffectWithDifferentDepenedencies from "./components/ReactuseEffect/ReactuseEffectWithDifferentDepenedencies"
import DataFetchingWIthReactuseEffectWithSpecificID from "./components/ReactuseEffect/DataFetchingWIthReactuseEffectWithSpecificID"
import CommunicationusingReactuseContextHook from "./components/ReactuseContext/BasicUseCase/CommunicationusingReactuseContextHook"
import SimpleCountUsingReactuseReducer from "./components/ReactuseReducer/SimpleCountUsingReactuseReducer"
import ComplexCountUsingReactuseReducerHook from "./components/ReactuseReducer/ComplexCountUsingReactuseReducerHook"
import SimpleCountUsingMultipleReducers from "./components/ReactuseReducer/SimpleCountUsingMultipleReducers"
import ReactuseReducerWithuseContextHook from "./components/ReactuseReducerWithuseContext/ReactuseReducerWithuseContextHook"
import DataFetchingUsinguseStateAnduseEffect from "./components/ReactHookCombinations/DataFetchingUsinguseStateAnduseEffect"
import DataFetchingUsinguseReducerAnduseEffect from "./components/ReactHookCombinations/DataFetchingUsinguseReducerAnduseEffect"
import ReactuseCallBackHook from "./components/ReactuseCallBackHook/ReactuseCallBackHook"
import PerformanceOptimizationUsingReactuseMemoHook from "./components/ReactuseMemo/PerformanceOptimizationUsingReactuseMemoHook"
import ReactuseRefToFocusInput from "./components/ReactuseRef/ReactuseRefToFocusInput"
import ReactuseRefUsageInTimer from "./components/ReactuseRef/ReactuseRefUsageInTimer"
import ReactuseDocumentTitleCustomHookUsage from "./components/CustomHooks/ReactuseDocumentTitleCustomHook/ReactuseDocumentTitleCustomHookUsage"
import ReactuseCounterCustomHook from "./components/CustomHooks/ReactuseCounterCustomHook/ReactuseCounterCustomHook"

export const userContext = React.createContext()

export default function App() {
  const [user, setUser] = useState("")
  return (
    <div className="App">
      {/* <header className="App-header">
        <b>React Hooks By MS</b>
      </header>
      <br />
      <button onClick={() => setState(state + 1)}>Increment Count</button>&nbsp;
      <button onClick={() => setState(state - 1)}>Decrement Count</button>
      <p>Count:{state}</p> */}
      <userContext.Provider value={{ user, setUser }}>
        {/* Normal usecase for useStateHook */}
        {/* <ReactuseState /> */}
        <hr />
        {/* Object useCase for React useState Hook */}
        <ReactuseStateObjectHook />
        <hr />
        <ReactuseStateArrayHook />
        <hr />

        <label>UserName</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter username"
        />
        {/* <DataFetchReactuseEffectHook /> */}
        <hr />
        {/* <ReactuseEffectAfterRender />
        <hr />
        <ConditionalReactuseEffect />
        <hr />
        <RunReactuseEffectOnlyOnce />
        <hr />
        <CleanupWithReactuseEffect />
        <hr />
        <ReactuseEffectWithDifferentDepenedencies />
        <hr />
        <DataFetchingWIthReactuseEffectWithSpecificID />
        <hr />
        <CommunicationusingReactuseContextHook />
        <hr />
        <SimpleCountUsingReactuseReducer />
        <hr />
        <ComplexCountUsingReactuseReducerHook />
        <hr />
        <SimpleCountUsingMultipleReducers />
        <hr />
        <ReactuseReducerWithuseContextHook />
        <hr />
        <DataFetchingUsinguseStateAnduseEffect />
        <hr />
        <DataFetchingUsinguseReducerAnduseEffect />
        <hr />
        <ReactuseCallBackHook />
        <hr />
        <PerformanceOptimizationUsingReactuseMemoHook />
        <hr />
        */}
        <ReactuseRefToFocusInput />
        <hr />
        <ReactuseRefUsageInTimer />
        <hr />
        <ReactuseDocumentTitleCustomHookUsage />
        <hr />
        <ReactuseCounterCustomHook />
        <br />
      </userContext.Provider>
    </div>
  )
}
