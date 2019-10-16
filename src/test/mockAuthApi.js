import {users} from './users';

export async function login(userName, password) {
    const userIndex = users.findIndex(user => user.userName === userName);

    if (userIndex === -1) {
        return {
            user: null,
            authenticated: false
        };
    }

    return {
        user: users[userIndex],
        authenticated: true,
        token:"kek"
    };
}
