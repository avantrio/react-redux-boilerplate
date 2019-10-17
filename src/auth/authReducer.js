//Incident Reducers
import { createReducer } from 'redux-starter-kit';

import {
    loginRequest,
    loginSuccess,
    // loginError,
    logout
} from './authActions'


const initialState = {
    isLogged: false,
    user:{},
    token:null
}

const authReducer = createReducer(initialState, {

    [loginRequest] : (state, action) => {
        state.isLogged = false;
    },
    [loginSuccess] : (state, action) => {
        state.isLogged = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
    },
    [logout] : (state, action) => {
        state.isLogged = false;
        state.user = {};
        state.token = null;
    },

})

export default authReducer;