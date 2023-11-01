import '../styles/Card.css'
import React from "react";

const Card = ({nombre, curso}) => {
  return (
    <div className='card'>
        <h3>Perfecto, el alumno {nombre} se esta cargando!</h3>
        <h4>Curso inscripto: {curso}.</h4>
    </div>
  )
}

export default Card;