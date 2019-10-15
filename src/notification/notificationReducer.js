//Incident Reducers
import produce from "immer";

import {
    showNotification,
    hideNotification
} from './notificationActions';

const initialState = {
    isOpen: false,
    errors: null,
    confirms: null,
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
            draft.errors = null;
            draft.confirms = null;
            draft.isLoading = false;
            draft.body = null;
            return draft;
        }else if(error){
            draft.isOpen = true;
            draft.errors = error;
            draft.isLoading = false;
            return draft;
        }else if(confirm){
            draft.confirms = confirm;
            draft.isOpen = true;
            draft.isLoading = false;
            return draft;
        }else if(isLoading !== undefined && isLoading !== null){
            if(!draft.errors && !draft.confirms){
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