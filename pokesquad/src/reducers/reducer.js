import { combineReducers } from 'redux';
import { GET_POKEMON } from '../actions/constants';
import { LOGIN, LOGOUT } from '../constants';

const rootReducer = combineReducers({
    users: userReducer,
    teams: teamReducer,
    pokemon: pokemonReducer,
    comment: commentReducer
})

export default rootReducer;

function userReducer(state = {}, action) {

    switch (action.type) {
        case LOGIN:
            return action.payload

        case LOGOUT:
            return {}

        default:
            return state
    }

}

function teamReducer(state = {}, action) {
    
    switch (action.type) {
        case GET_TEAMS:
            return action.payload
        
        case ADD_TEAM:
            return [...state, action.payload]
        
        default:
            return state
        
    }

}


function pokemonReducer(state = [], action) {

    switch (action.type) {
        case GET_POKEMON:
            return action.payload
        default:
            return state
    }

}


