import React, { useContext } from 'react'
import PersonajesContext from '../../context/PersonajesContext'

const Personajes = () => {

    const {personajes} = useContext(PersonajesContext)

  return (
    <div>
        <h3>Personajes</h3>
        {personajes.map(personaje=> (
            <li key={personaje.id}>
                {personaje.name}
            </li>
        ))}
    </div>
  )
}

export default Personajes