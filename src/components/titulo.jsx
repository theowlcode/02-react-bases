import "./titulo.css";

// propiedades
export const Titulo = ({ text, mostrarTexto }) => {
  //logica
  console.log(text, mostrarTexto);
  //return = el contenido
  return (
    <h1 className="mi-titulo">{mostrarTexto ? text : "Texto por defecto"}</h1>
  );
};
