import { useEffect, useState } from "react";

export const Colocarbar = () => {
  const [color, setColor] = useState("orange");
  const [counter, setCounter] = useState(0);

  console.log("Render");

  useEffect(() => {
    if (color === "red") {
      alert("Se cambió el color a rojo");
    }
    console.log("Disparando el efecto");
  }, [color]);

  // useEffect(() => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }, [counter]);

  return (
    <div>
      <p>{color}</p>
      <button onClick={() => setColor("red")}>cambiar a rojo</button>
      <button onClick={() => setColor("green")}>cambiar a verde</button>
    </div>
  );
};
