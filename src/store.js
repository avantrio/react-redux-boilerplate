import { configureStore } from 'redux-starter-kit';

import authReducer from './auth/authReducer';
import notificationReducer from './notification/notificationReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        notification: notificationReducer,
    }
})

export default store;