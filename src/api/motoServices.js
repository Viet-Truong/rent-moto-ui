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

export const thongKeXe = async () => {
    try {
        const res = await request.get('thongkeXe');
        return JSON.parse(res);
    } catch (e) {
        console.log(e);
    }
};

export const addXe = async (formData) => {
    try {
        const res = await request.post('addXe', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const updateXe = async (formData) => {
    try {
        const res = await request.post('updateXe', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};
