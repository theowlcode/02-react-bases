import { useState } from "react";

export const FormV2 = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    edad: 0,
  });

  const handleChange = (e) => {
    const { value: valueTarget, name: nameTarget } = e.target;
    // const objetoNuevo = {
    //   ...formValues,
    //   [nameTarget]: valueTarget,
    // };
    // setFormValues(objetoNuevo);
    setFormValues((valorActualForm) => {
      return {
        ...valorActualForm,
        [nameTarget]: valueTarget,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
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
      <input
        name="edad"
        placeholder="Escribe tu apellido"
        type="number"
        onChange={handleChange}
      />
      <button>Enviar formulario</button>
    </form>
  );
};
