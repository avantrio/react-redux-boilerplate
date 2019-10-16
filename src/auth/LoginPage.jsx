import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Redirect} from 'react-router-dom';

import { login, restoreUserSession } from '../auth/authActions';
import { read as readLocalStorage} from '../utils/localStorage';
import {APP_NAME} from '../config';

function LoginPage() {

    const dispatch = useDispatch()

    useEffect(()=>{
        const checkForAuthToken = async () => {
            const authToken = await readLocalStorage(APP_NAME);
            if(authToken){
                dispatch(restoreUserSession(authToken));
            }
        }
        checkForAuthToken()
    },[])

    const isLoggedIn = useSelector((state) => (state.auth.isLogged))

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        dispatch(login(userName,password))
    }

    if(isLoggedIn){
        return <Redirect to="/app/home"/>
    }

    return (
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-black">Login</h3>
                        <hr class="login-hr" />
                        <p class="subtitle has-text-black">Please login to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="https://placehold.it/128x128" alt="" />
                            </figure>
                            <form>
                                <div class="field">
                                    <div class="control">
                                        <input 
                                            class="input is-large" 
                                            type="email" 
                                            placeholder="Your Email"  
                                            autofocus="" 
                                            value={userName}
                                            onChange={(e)=>{setUserName(e.target.value)}}
                                        />
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input 
                                            class="input is-large" 
                                            type="password" 
                                            placeholder="Your Password"
                                            value={password}
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                </div>
                                <button 
                                    class="button is-block is-info is-large is-fullwidth"
                                    onClick={handleSignIn}
                                >
                                    Login 
                                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                        <p class="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            <a href="../">Need Help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
