import React, { useContext } from 'react'
import MagiaContext from '../../context/MagiaContext'

const Magia = () => {

    const {magia} = useContext(MagiaContext)

  return (
    <div>
        <h3>Magia</h3>
        {magia.map(ramaDeLaMagia=> (
            <li key={ramaDeLaMagia.id}>
                {ramaDeLaMagia.name}
            </li>
        ))}
    </div>
  )
}

export default Magia