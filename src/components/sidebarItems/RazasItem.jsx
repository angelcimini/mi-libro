import React, { useContext } from 'react'
import RazasContext from '../../context/RazasContext'
import types from '../../types/types'

const RazasItem = () => {

  const {showHideDispatch} = useContext(RazasContext)

  return (
    <li> 
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.razas })}  
      > Razas
      </button>
    </li>
  )
}

export default RazasItem