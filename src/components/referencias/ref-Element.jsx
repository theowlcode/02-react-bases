import React, { useRef } from "react";

export const RefElement = () => {
  const ref = useRef(null);
  console.log(ref);

  const handleClick = () => {
    ref.current.style.color =
      ref.current.style.color === "red" ? "blue" : "red";
    console.log(ref.current.value);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Enviar Input</button>
    </div>
  );
};
