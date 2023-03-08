import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const EscenariosContext = createContext();

const EscenariosProvider = ({children}) => {

  const [escenarios, setEscenarios] = useState([
    { id: 0, name: 'Eredro'},
    { id: 1, name: 'Esparcel'},
    { id: 2, name: 'Las Astillas'}
  ])

  const [showHideEscenarios, showHideDispatch] = useReducer(showHideReducer, false)
  const data = { escenarios, setEscenarios, showHideEscenarios, showHideDispatch }

  return (
    <EscenariosContext.Provider value={data}>
            {children}
    </EscenariosContext.Provider>
  )
}

export { EscenariosProvider }
export default EscenariosContext