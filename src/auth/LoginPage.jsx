import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {login,logout} from '../auth/authActions';



function LoginPage() {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>(state.auth.isLogged)) 

    return (
        <div className="root">
            <button onClick={()=>{isLoggedIn?dispatch(logout()):dispatch(login())}}>
            {isLoggedIn?"Logout":"Login"}
            </button>
        </div>
    );
}

export default LoginPage;
