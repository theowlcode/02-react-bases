import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleChange = (e) => {
    console.log(e);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setLastname(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(lastname);
  };

  return (
    // <form onSubmit={(e) => handleSubmit(e, "Miformulario")}>
    <form onSubmit={handleSubmit}>
      <h3>Mi formulario</h3>
      <input
        name="name"
        placeholder="Escribe tu nombre"
        onChange={handleChange}
      />
      <input
        name="lastname"
        placeholder="Escribe tu apellido"
        onChange={handleChange}
      />
      <button>Enviar formulario</button>
    </form>
  );
};
