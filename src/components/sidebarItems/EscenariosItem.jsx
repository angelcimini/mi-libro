import { useContext } from "react"
import EscenariosContext from "../../context/EscenariosContext"
import types from "../../types/types"

const EscenariosItem = () => {

  const {showHideDispatch} = useContext(EscenariosContext)

  return (
    <li> 
      <button 
        className='item'
        onClick={()=>showHideDispatch({ type: types.escenarios })}
        > Escenarios
      </button>
    </li>
  )
}

export default EscenariosItem