import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const RazasContext = createContext();

const RazasProvider = ({children}) => {

  const [razas, setRazas] = useState([
    { id: 0, name: 'razas' }
  ])

  const [showHideRazas, showHideDispatch] = useReducer(showHideReducer, false)

  const data = { razas, setRazas, showHideRazas, showHideDispatch}

  return (
    <RazasContext.Provider value={data}>
            {children}
    </RazasContext.Provider>
  )
}

export { RazasProvider }
export default RazasContext