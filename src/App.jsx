import "./App.css";
import { RefCounter } from "./components/referencias/ref-counter";
import { RefElement } from "./components/referencias/ref-Element";

function App() {
  return (
    <div className="App">
      <RefCounter />
      <hr />
      <RefElement />
    </div>
  );
}

export default App;
