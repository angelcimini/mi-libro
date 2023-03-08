import React, { useContext } from 'react'
import ReligionesContext from '../../context/ReligionesContext'
import types from '../../types/types'

const ReligionesItem = () => {

  const {showHideDispatch} = useContext(ReligionesContext)

  return (
    <li> 
      <button
        className='item'
        onClick={()=>showHideDispatch({ type: types.religiones })}  
      > Religiones
      </button>
    </li>
  )
}

export default ReligionesItem