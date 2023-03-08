import React, { createContext, useReducer, useState } from 'react'
import showHideReducer from '../reducers/reducers';

const MagiaContext = createContext();

const MagiaProvider = ({children}) => {

  const [magia, setMagia] = useState([
    {id: 0, name: 'Magia name'}
  ])
  const [showHideMagia, showHideDispatch] = useReducer(showHideReducer, false)
  const data = { magia, setMagia, showHideMagia, showHideDispatch }

  return (
    <MagiaContext.Provider value={data}>
            {children}
    </MagiaContext.Provider>
  )
}

export { MagiaProvider }
export default MagiaContext