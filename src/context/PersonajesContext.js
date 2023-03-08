import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const PersonajesContext = createContext();

const PersonajesProvider = ({children}) => {

  const [personajes, setPersonajes] = useState([
    { id: 0, name: 'personajes' }
  ])

  const [showHidePersonajes, showHideDispatch] = useReducer(showHideReducer, false)
  const data = { personajes, setPersonajes, showHidePersonajes, showHideDispatch }

  return (
    <PersonajesContext.Provider value={data}>
            {children}
    </PersonajesContext.Provider>
  )
}

export { PersonajesProvider }
export default PersonajesContext