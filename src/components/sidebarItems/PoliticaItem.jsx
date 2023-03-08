import React, { useContext } from 'react'
import PoliticaContext from '../../context/PoliticaContext'
import types from '../../types/types'

const PoliticaItem = () => {

  const {showHideDispatch} = useContext(PoliticaContext)

  return (
    <li> 
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.politica })}  
      > Politica
      </button>
    </li>
  )
}

export default PoliticaItem