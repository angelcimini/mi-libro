import React, { useContext } from 'react'
import EscenariosContext from '../../context/EscenariosContext'
import MagiaContext from '../../context/MagiaContext'
import MaravillasContext from '../../context/MaravillasContext'
import PersonajesContext from '../../context/PersonajesContext'
import PoliticaContext from '../../context/PoliticaContext'
import RazasContext from '../../context/RazasContext'
import ReligionesContext from '../../context/ReligionesContext'
import Escenario from '../escenario/Escenario'
import Magia from '../magia/Magia'
import Maravillas from '../maravillas/Maravillas'
import Personajes from '../personajes/Personajes'
import Politica from '../politica/Politica'
import Razas from '../razas/Razas'
import Religiones from '../religiones/Religiones'

const Dashboard = () => {

  const {showHideEscenarios} = useContext(EscenariosContext)
  const {showHideMagia} = useContext(MagiaContext)
  const {showHideMaravillas} = useContext(MaravillasContext)
  const {showHidePersonajes} = useContext(PersonajesContext)
  const {showHidePolitica} = useContext(PoliticaContext)
  const {showHideRazas} = useContext(RazasContext)
  const {showHideReligiones} = useContext(ReligionesContext)

  return (
    <div className='dashboard'>
        {showHideEscenarios && <Escenario />}
        {showHideMagia && <Magia />}
        {showHideMaravillas && <Maravillas />}
        {showHidePersonajes && <Personajes />}
        {showHidePolitica && <Politica />}
        {showHideRazas && <Razas />}
        {showHideReligiones && <Religiones />}
    </div>
  )
}

export default Dashboard