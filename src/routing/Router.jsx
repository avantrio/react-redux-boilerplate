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
import MasterLayout from '../layout/MasterLayout';
import DashboardPage from '../dashboard/DashboardPage';

export default function RouterComponent() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" component={LoginPage} />
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path='/app' component={MasterLayout}>
                        <Switch>
                            <PrivateRoute exact path='/app/home' component={(props)=>(<div>"Home"</div>)} />
                            <PrivateRoute exact path='/app/dashboard' component={DashboardPage} />
                        </Switch>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}