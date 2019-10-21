import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideNotification } from './notificationActions';


function Notification() {

    const dispatch = useDispatch()
    const { isOpen, confirm } = useSelector((state) => (state.notification))

    if (isOpen) {
        setTimeout(function(){ dispatch(hideNotification()); }, 2000);
    }

    return (
        isOpen?
        (<div class="notification is-primary">
            <button class="delete" onClick={()=>{dispatch(hideNotification())}}></button>
            {confirm}
        </div>) :
        null
    );
}

export default Notification;