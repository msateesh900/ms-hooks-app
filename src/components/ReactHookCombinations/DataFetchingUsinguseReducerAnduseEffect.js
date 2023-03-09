import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };
    case "DATA_FETCH_FAILURE":
      return { loading: false, error: "SomeThing went Wrong", post: {} };
    default:
      return state;
  }
};

function DataFetchingUsinguseReducerAnduseEffect() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/99")
      .then((response) => {
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "DATA_FETCH_ERROR", payload: err });
      });
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Data Fetch using useReducer and useEffect Hooks</h3>
      <p>{state.loading ? "Loading" : state.post.title}</p>
      <p>{state.error ? "Something went wrong" : null}</p>
    </div>
  );
}

export default DataFetchingUsinguseReducerAnduseEffect;
