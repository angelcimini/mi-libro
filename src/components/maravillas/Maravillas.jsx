import React, { useContext } from 'react'
import MaravillasContext from '../../context/MaravillasContext'

const Maravillas = () => {

    const {maravillas} = useContext(MaravillasContext)

  return (
    <div>
        <h3>Maravillas</h3>
        {maravillas.map(maravilla=> (
            <li key={maravilla.id}>
                {maravilla.name}
            </li>
        ))}
    </div>
  )
}

export default Maravillas