import React, { useRef, useState } from "react";

export const RefCounter = () => {
  console.log("rendering");
  // const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log(counter);
  //   setCounter((prev) => prev + 1);
  // };

  const counter = useRef(0);
  console.log(counter.current);

  const handleClick = () => {
    console.log(counter.current);
    counter.current = counter.current + 1;
  };

  return (
    <div>
      {/* <span>{counter}</span> */}
      {/* <button onClick={handleClick}>Clic aquí</button> */}
      {/* <span>{counter.current}</span> */}
      <button onClick={handleClick}>Clic aquí</button>
    </div>
  );
};
