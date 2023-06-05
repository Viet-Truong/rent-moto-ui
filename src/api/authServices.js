import * as request from '~/utils/request';

export const login = async ({ username, password }) => {
    try {
        const res = await request.post('login', {
            username,
            password,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const register = async ({ username, password, role = 'Khách hàng' }) => {
    try {
        const res = await request.post('addAccount', {
            username,
            password,
            role,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};
