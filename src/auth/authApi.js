import handler from './apiHandler';
import mockApi from '../test/mockapi';

export const login = async (userName, password) => {
    // return handler.get('/login');
    return await mockApi.signIn(userName, password)
}