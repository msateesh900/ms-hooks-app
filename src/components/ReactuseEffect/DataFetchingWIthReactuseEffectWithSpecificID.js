import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingWIthReactuseEffectWithSpecificID() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleButtonClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [idFromButtonClick]);
  return (
    <div>
      <h3>Data Fetching with React Use Effect with ID</h3>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      &nbsp;
      <button onClick={handleButtonClick}>Fetch Post</button>
      <br />
      {post.title}
    </div>
  );
}

export default DataFetchingWIthReactuseEffectWithSpecificID;
