import '../styles/Formulario.css'
import { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const [alumno, setAlumno] = useState({
    nombre: "",
    curso: "",
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    if (alumno.nombre.length >= 3 && alumno.curso.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className='formulario'>
      {!show && (
        <form onSubmit={handleSumbit} >
          <label>Ingrese nombre</label>
          <input
            type="text"
            value={alumno.nombre}
            onChange={(event) => setAlumno({ ...alumno, nombre: event.target.value.trim() }) }
          />

          <label>Ingrese curso a inscribir</label>
          <input
            type="text"
            value={alumno.curso}
            onChange={(event) => setAlumno({ ...alumno, curso: event.target.value.trim() }) }
          />

          <button>Enviar</button>
        </form>
      )}
      {show && <Card nombre={alumno.nombre} curso={alumno.curso} />}
      {error && ( <h5>Por favor chequea que la información sea correcta</h5> )}
    </div>
  );
};

export default Formulario;
