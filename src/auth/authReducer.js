//Incident Reducers
import { createReducer } from 'redux-starter-kit';

import {
    login,
    logout
} from './authActions'


const initialState = {
    isLogged: false,
}

const incidentReducer = createReducer(initialState, {

    [login] : (state, action) => {
        state.isLogged = true;
    },
    [logout] : (state, action) => {
        state.isLogged = false;
    },

})

export default incidentReducer;