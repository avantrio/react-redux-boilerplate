
import { createAction } from 'redux-starter-kit';

import * as authApi from './authApi';

//login/logout
export const loginRequest = createAction('AUTH/LOG_IN_REQUEST');
export const loginSuccess = createAction('AUTH/LOG_IN_SUCCESS');
export const loginError = createAction('AUTH/LOG_IN_ERRROR');

export const login = (userName, password) => {
    return async (dispatch) => {
        try{
            dispatch(loginRequest());
            const result = await authApi.login(userName, password);
            dispatch(loginSuccess({data:result}))
        }catch(e){
            dispatch(loginError({error:e}))
        } 
    }
}

export const restoreUserSession = (authToken) => {
    return async (dispatch) => {
        dispatch(loginSuccess({
            data:{
                user : {
                    uid: 1,
                    userName:"one",
                    displayName:"User One",
                    password:"12345",
                    role:"ADMIN"
                },
                token:"kek",
                authenticated: true,
            }
        }))
    }
}


export const logout = createAction('AUTH/LOG_OUT');