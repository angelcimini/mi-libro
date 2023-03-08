import React, { useContext } from 'react'
import PersonajesContext from '../../context/PersonajesContext'
import types from '../../types/types'

const PersonajesItem = () => {

  const {showHideDispatch} = useContext(PersonajesContext)

  return (
    <li> 
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.personajes })}  
      > Personajes
      </button>
    </li>
  )
}

export default PersonajesItem