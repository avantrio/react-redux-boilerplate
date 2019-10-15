import React from 'react';
import { Provider } from "react-redux";

import store from './store';
import Router from './routing/Router';


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router />
            </div>
        </Provider>
    );
}

export default App;
