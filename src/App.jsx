import './styles/App.css'
import Formulario from "./Components/Formulario";

function App() {
  return (
    <div className="App" id='root'>
      <button onClick={() => window.location.reload()}>Refrescar</button>
      <h1>Carga de estudiantes</h1>
      <Formulario/>
    </div>
  );
}

export default App;