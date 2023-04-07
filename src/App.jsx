import "./App.css";
import { Titulo } from "./components/titulo";

function App() {
  return (
    <div className="App">
      <Titulo text="mi titulo" mostrarTexto={false} />
    </div>
  );
}

export default App;
