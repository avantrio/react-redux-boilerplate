import * as localStorage from '../utils/localStorage';
import {APP_NAME} from '../config';

function selectAuthToken(state) {
    return state.auth.token;
}

let currentToken;
// this function is subscribed to the store.
export function handleTokenChange(store) {
    let previousToken = currentToken
    currentToken = selectAuthToken(store.getState())
    if (previousToken !== currentToken) {
        localStorage.write(APP_NAME, currentToken);
    }
}



