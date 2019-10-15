import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import history from './history';
import LoginPage from '../auth/LoginPage';
import PrivateRoute from './PrivateRoute';

export default function RouterComponent() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}