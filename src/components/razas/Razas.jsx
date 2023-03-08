import React, { useContext } from 'react'
import RazasContext from '../../context/RazasContext'

const Razas = () => {

    const {razas} = useContext(RazasContext)

  return (
    <div>
        <h3>Razas</h3>
        {razas.map(raza=> (
            <li key={raza.id}>
                {raza.name}
            </li>
        ))}
    </div>
  )
}

export default Razas