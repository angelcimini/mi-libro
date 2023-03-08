import React, { useContext } from 'react'
import MagiaContext from '../../context/MagiaContext'
import types from '../../types/types'

const MagiaItem = () => {

  const {showHideDispatch} = useContext(MagiaContext)

  return (
    <li>
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.magia })}  
      > Magia
      </button>
    </li>
  )
}

export default MagiaItem