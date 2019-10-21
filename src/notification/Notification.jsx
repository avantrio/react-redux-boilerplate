import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideNotification } from './notificationActions';


function Notification() {

    const dispatch = useDispatch()
    const { isOpen, confirm, error } = useSelector((state) => (state.notification))

    if (isOpen) {
        setTimeout(function(){ dispatch(hideNotification()); }, 2000);
    }

    const getNotificationClass = () => {
        if(confirm){
            return "notification is-success";
        }else if(error){
            return "notification is-danger"
        }else{
            return "notification is-link"
        }
    }

    return (
        isOpen?
        (<div class={getNotificationClass()}>
            <button class="delete" onClick={()=>{dispatch(hideNotification())}}></button>
            {confirm || error}
        </div>) :
        null
    );
}

export default Notification;