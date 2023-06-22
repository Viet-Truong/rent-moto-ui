import * as request from '~/utils/request';

export const getAllXe = async (q) => {
    try {
        const res = await request.get('getAllXe', {
            params: {
                q,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getAllXeAdmin = async ({ q = null, page = '', type = '' }) => {
    try {
        const res = await request.get('getAllXeAdmin', {
            params: {
                q,
                page,
                type,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};
