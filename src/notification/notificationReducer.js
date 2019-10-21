//Incident Reducers
import produce from "immer";

import {
    showNotification,
    hideNotification
} from './notificationActions';

const initialState = {
    isOpen: false,
    error: null,
    confirm: null,
    isLoading: false
}

function notificationReducer(state = initialState, action) {

    return produce(state, draft => {

        const { type, payload } = action;
        const { error, isLoading, confirm } = payload || {};


        if (type === showNotification().type){
            draft.isOpen = true;
            return draft;
        }else if(type === hideNotification().type){
            draft.isOpen = false;
            draft.error = null;
            draft.confirm = null;
            draft.isLoading = false;
            draft.body = null;
            return draft;
        }else if(error){
            draft.isOpen = true;
            draft.error = error;
            draft.isLoading = false;
            return draft;
        }else if(confirm){
            draft.confirm = confirm;
            draft.isOpen = true;
            draft.isLoading = false;
            return draft;
        }else if(isLoading !== undefined && isLoading !== null){
            if(!draft.error && !draft.confirm){
                if(isLoading === true){
                    draft.isLoading = true;
                    draft.isOpen = true;
                }else{
                    draft.isOpen = false;
                }
            }            
        }else{
            return state;
        }
    });
}

export default notificationReducer;