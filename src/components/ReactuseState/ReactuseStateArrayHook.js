import React, { useState } from "react";

export default function ReactuseStateArrayHook() {
  const [numberArray, setNumberArray] = useState([]);
  const [number, setNumber] = useState(0);

  const addRandomNumber = () => {
    // console.log(numberArray);
    setNumberArray([
      ...numberArray,
      {
        // id: numberArray.length,
        // value: Math.floor(Math.random() * 10) + 1,
        id: numberArray.length,
        value: number,
      },
    ]);
  };
  return (
    <div>
      <h3>React useState Array Hook</h3>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      &nbsp;
      <button onClick={addRandomNumber}> Add to Number to Array</button>
      <p>Numbers in array Are:</p>
      {numberArray &&
        numberArray.map((number) => (
          <span key={number.id}>{number.value}, </span>
        ))}
    </div>
  );
}
