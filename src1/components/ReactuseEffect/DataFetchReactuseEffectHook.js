import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../App";

import axios from "axios";

export default function DataFetchReactuseEffectHook() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(userContext);
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState("");

  // first use case
  useEffect(() => {
    console.log("inside React Use Effect");
  });

  // second use case
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setJsonData(res.data);
        console.log(res.data);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
    // ComponentWillUnmount lifecycle
    return () => {
      console.log("Clean up function/unmounting");
    };
  }, [loaded]);

  useEffect(() => {});
  return (
    <div>
      <h3>Use Effect Hook here for data Fetching</h3>
      <button onClick={(prevState) => setCount(prevState.count + 1)}>
        count In UseEffect
      </button>
      <div>
        {/* <table>
          <tbody> */}
        {error.length > 1 ? (
          <div style={{ textcolor: "red" }}>Error in request</div>
        ) : (
          <span></span>
        )}
        {!loaded && error.length > 1 ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <h2>User Names</h2>
            {jsonData ? (
              jsonData.map((item) => (
                <span key={item.id}>
                  <p style={{ textAlign: "center" }}>{item.name}</p>
                </span>
              ))
            ) : (
              <h2>Nothing to Display </h2>
            )}
            {/* </tbody>
        </table> */}
            <p>
              User from useContext:<b>{user}</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
