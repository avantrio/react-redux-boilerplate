import handler from '../apiHandler';
import * as mockApi from '../test/mockapi';

export const login = async (userName, password) => {
    // return handler.get('/login');
    const result = await mockApi.signIn(userName, password)
    if(!result.authenticated){
        throw Error()
    }
    return result;
}