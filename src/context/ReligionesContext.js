import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const ReligionesContext = createContext();

const ReligionesProvider = ({children}) => {

  const [religiones, setReligiones] = useState([
    { id: 0, name: 'religiones' }
  ])

  const [showHideReligiones, showHideDispatch] = useReducer(showHideReducer, false)

  const data = { religiones, setReligiones, showHideReligiones, showHideDispatch }

  return (
    <ReligionesContext.Provider value={data}>
            {children}
    </ReligionesContext.Provider>
  )
}

export { ReligionesProvider }
export default ReligionesContext