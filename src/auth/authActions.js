
import { createAction } from 'redux-starter-kit';

//login/logout
export const login = createAction('AUTH/LOG_IN');
export const logout = createAction('AUTH/LOG_OUT');