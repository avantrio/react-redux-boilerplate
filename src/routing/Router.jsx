import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import history from './history';
import LoginPage from '../auth/LoginPage';
import PrivateRoute from './PrivateRoute'

export default function RouterComponent() {
    return (
        <Router history={history}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <PrivateRoute path="/about" component={About} />
                    <PrivateRoute path="/users" component={Users} />
                    <Route exact path="/">
                        <Home />
                    </Route>
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

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}