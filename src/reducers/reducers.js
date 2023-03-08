import types from '../types/types';

const showHideReducer = (state, action) => {
    switch (action.type) {
        case types.escenarios:
            return !state
        case types.magia:
            return !state
        case types.maravillas:
            return !state
        case types.personajes:
            return !state
        case types.politica:
            return !state
        case types.razas:
            return !state
        case types.religiones:
            return !state
        default:
            return state
    }
}

export default showHideReducer