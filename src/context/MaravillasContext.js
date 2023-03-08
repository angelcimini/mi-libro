import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const MaravillasContext = createContext();

const MaravillasProvider = ({children}) => {

  const [maravillas, setMaravillas] = useState([
    { id: 0, name: 'maravilla'}
  ])

  const [showHideMaravillas, showHideDispatch] = useReducer(showHideReducer, false)
  const data = { maravillas, setMaravillas, showHideMaravillas, showHideDispatch }

  return (
    <MaravillasContext.Provider value={data}>
            {children}
    </MaravillasContext.Provider>
  )
}

export { MaravillasProvider }
export default MaravillasContext