import React, { useContext } from 'react'
import MaravillasContext from '../../context/MaravillasContext'
import types from '../../types/types'

const MagiaItem = () => {

  const {showHideDispatch} = useContext(MaravillasContext)

  return (
    <li> 
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.maravillas })}  
      > Maravillas
      </button>
    </li>
  )
}

export default MagiaItem