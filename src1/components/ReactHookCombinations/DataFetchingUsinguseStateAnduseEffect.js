import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingUsinguseStateAnduseEffect() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((Error) => {
        setLoading(false);
        setPost({});
        setError("Something went Wrong");
      });
  });
  return (
    <div>
      <h3>Data Fetch using useState and useEffect</h3>
      <p>{loading ? "loading" : post.title}</p>
      <p>{error ? error : null}</p>
    </div>
  );
}

export default DataFetchingUsinguseStateAnduseEffect;
