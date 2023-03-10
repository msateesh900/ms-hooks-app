import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ReactuseCallBackHook() {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <h3>React useCallback Hook used for optimization purpose</h3>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ReactuseCallBackHook;
