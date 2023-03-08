import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const PoliticaContext = createContext();

const PoliticaProvider = ({children}) => {

  const [politica, setPolitica] = useState([
    { id: 0, name: 'Politica' }
  ])

  const [showHidePolitica, showHideDispatch] = useReducer(showHideReducer, false)

  const data = { politica, setPolitica, showHidePolitica, showHideDispatch }

  return (
    <PoliticaContext.Provider value={data}>
            {children}
    </PoliticaContext.Provider>
  )
}

export { PoliticaProvider }
export default PoliticaContext