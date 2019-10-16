import { configureStore } from 'redux-starter-kit';
import { handleTokenChange } from './auth/authTokenHandler';

import authReducer from './auth/authReducer';
import notificationReducer from './notification/notificationReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        notification: notificationReducer,
    }
})

export default store;

//subscribers
export const unsubscribeTokenHandler = store.subscribe(()=>{handleTokenChange(store)})