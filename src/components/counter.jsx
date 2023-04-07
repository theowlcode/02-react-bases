// const arreglo = [1, 2, 3, 4, 5];
import "./counter.css";
import { useState } from "react";

// const [p1, p2, k3, , j5] = arreglo;
// console.log(p1, p2, k3, j5);

export const Counter = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    console.log("Incrementando");
    setContador((valorActual) => {
      return valorActual + 1;
    });
  };
  const decrementar = () => {
    console.log("Decrementando");
    setContador((valorActual) => valorActual - 1);
  };
  return (
    <div>
      <p>contador: {contador}</p>
      <button className="buttonAdd" onClick={incrementar}>
        Incrementar en 1
      </button>
      <button className="buttonDec" onClick={decrementar}>
        Decrementar en 1
      </button>
    </div>
  );
};
