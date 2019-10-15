import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showNotification, hideNotification} from './notificationActions';


function ConfirmNotification() {

    const dispatch = useDispatch()
    const {isOpen, confirms} = useSelector((state)=>(state.notification.isOpen))

    if(isOpen){
        window.confirm(confirms);
        dispatch(hideNotification())
    }

    return (
        <div className="root">
        </div>
    );
}

export default ConfirmNotification;