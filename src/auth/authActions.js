
import { createAction } from 'redux-starter-kit';

import * as authApi from './authApi'

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


export const logout = createAction('AUTH/LOG_OUT');