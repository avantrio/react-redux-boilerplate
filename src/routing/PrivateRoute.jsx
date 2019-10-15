import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { withRouter } from "react-router";


function PrivateRouteComponent({ component: Component, children, ...rest }) {

    //select signed in state
    const isLoggedIn = useSelector((state)=>(state.auth.isLogged));

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    isLoggedIn ? (
                        <Component children={children} {...props} />
                    ) : (
                        <div>
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        </div>
                        )
                )
            }}
        />
    );
}



export default withRouter(PrivateRouteComponent);