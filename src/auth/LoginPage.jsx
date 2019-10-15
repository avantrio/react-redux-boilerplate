import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, logout } from '../auth/authActions';



function LoginPage() {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => (state.auth.isLogged))

    return (
        // <div className="root">
        //     <button onClick={()=>{isLoggedIn?dispatch(logout({confirm:"logged out"})):dispatch(login())}}>
        //     {isLoggedIn?"Logout":"Login"}
        //     </button>
        // </div>
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
                                        <input class="input is-large" type="email" placeholder="Your Email" autofocus="" />
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input class="input is-large" type="password" placeholder="Your Password" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                </div>
                                <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
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
