import React, { useContext } from 'react'
import PoliticaContext from '../../context/PoliticaContext'

const Politica = () => {

    const {politica} = useContext(PoliticaContext)

  return (
    <div>
        <h3>Politica</h3>
        {politica.map(tipoDePolitica=> (
            <li key={tipoDePolitica.id}>
                {tipoDePolitica.name}
            </li>
        ))}
    </div>
  )
}

export default Politica