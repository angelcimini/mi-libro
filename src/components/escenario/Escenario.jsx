import React, { useContext } from 'react'
import EscenariosContext from '../../context/EscenariosContext'

const Escenario = () => {

    const {escenarios} = useContext(EscenariosContext)

  return (
    <div>
        <h3>Escenarios</h3>
        {escenarios.map(escenario=> (
            <li key={escenario.id}>
                {escenario.name}
            </li>
        ))}
    </div>
  )
}

export default Escenario