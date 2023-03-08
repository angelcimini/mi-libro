import React, { useContext } from 'react'
import ReligionesContext from '../../context/ReligionesContext'

const Religiones = () => {

    const {religiones} = useContext(ReligionesContext)

  return (
    <div>
        <h3>Religiones</h3>
        {religiones.map(religion=> (
            <li key={religion.id}>
                {religion.name}
            </li>
        ))}
    </div>
  )
}

export default Religiones