import { createAction } from 'redux-starter-kit';

//show/hide notifications.
export const showNotification = createAction('NOTIFICATION/SHOW_NOTIFICATION');
export const hideNotification = createAction('NOTIFICATION/HIDE_NOTIFICATION');