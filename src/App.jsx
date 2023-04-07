import "./App.css";
import { Titulo } from "./components/titulo";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      {/* <Titulo text="mi titulo" mostrarTexto={true} /> */}
      <Counter />
    </div>
  );
}

export default App;
