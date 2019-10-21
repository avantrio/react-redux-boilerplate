import React from 'react';
import { Provider } from "react-redux";

import store from './store';
import Router from './routing/Router';
import 'bulma/css/bulma.css';

import Notification from  './notification/Notification'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router />
                <div style={{position: 'absolute',bottom: 50,right: 50, minWidth:300}}>
                    <Notification/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
