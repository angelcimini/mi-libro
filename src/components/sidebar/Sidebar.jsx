import React, { /* useContext */ } from 'react'
import EscenariosItem from '../sidebarItems/EscenariosItem'
import MagiaItem from '../sidebarItems/MagiaItem'
import MaravillasItem from '../sidebarItems/MaravillasItem'
import PersonajesItem from '../sidebarItems/PersonajesItem'
import PoliticaItem from '../sidebarItems/PoliticaItem'
import RazasItem from '../sidebarItems/RazasItem'
import ReligionesItem from '../sidebarItems/ReligionesItem'
// import EscenariosContext from '../../context/EscenariosContext'
// import MagiaContext from '../../context/MagiaContext'
// import MaravillasContext from '../../context/MaravillasContext'
// import PersonajesContext from '../../context/PersonajesContext'
// import PoliticaContext from '../../context/PoliticaContext'
// import RazasContext from '../../context/RazasContext'
// import ReligionesContext from '../../context/ReligionesContext'

const Sidebar = () => {

    
    // const {
    //     escenarios, setEscenarios,
    //     magia, setMagia,
    //     maravillas, setMaravillas,
    //     personajes, setPersonajes,
    //     politica, setPolitica,
    //     razas, setRazas,
    //     religiones, setReligiones
    // } = useContext(
    //     EscenariosContext,
    //     MagiaContext,
    //     MaravillasContext,
    //     PersonajesContext,
    //     PoliticaContext,
    //     RazasContext,
    //     ReligionesContext
    //     )

  return (
    <div>
        <ul>
            <EscenariosItem /> 
            <MagiaItem />
            <MaravillasItem />
            <PersonajesItem />
            <PoliticaItem />
            <RazasItem />
            <ReligionesItem />
        </ul>
    </div>
  )
}

export default Sidebar