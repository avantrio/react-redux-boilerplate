import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import history from './history';
import PrivateRoute from './PrivateRoute';

//page level components.
import LoginPage from '../auth/LoginPage';
import MasterLayout from '../layout/MasterLayout'

export default function RouterComponent() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" component={LoginPage} />
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path='/app' component={MasterLayout}>
                        <Switch>
                            <Route path='/app/home' component={(props)=>(<div>"Home"</div>)} />
                        </Switch>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}