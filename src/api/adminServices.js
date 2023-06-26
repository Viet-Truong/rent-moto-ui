import * as request from '~/utils/request';

export const getAllOrder = async ({ page, q = '' }) => {
    try {
        const res = await request.get('getAllOrder', {
            params: {
                page,
                q,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const thongKeRent = async () => {
    try {
        const res = await request.get('thongkeRent');
        return JSON.parse(res);
    } catch (e) {
        console.log(e);
    }
};

export const thongKeReturn = async () => {
    try {
        const res = await request.get('thongkeReturn');
        return JSON.parse(res);
    } catch (e) {
        console.log(e);
    }
};

export const accpetRentOrder = async ({ maNVDuyet, maThue }) => {
    try {
        const res = await request.post('nvSetOrder', {
            maNVDuyet,
            maThue,
            trangThai: 'Đã duyệt',
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getAllOrderAccepted = async ({ page, q = '' }) => {
    try {
        const res = await request.get('getOrderAccepted', {
            params: { page, q },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getAllOrderUnAccepted = async ({ page, q = '' }) => {
    try {
        const res = await request.get('getOrderUnAccepted', {
            params: { page, q },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getAllOrderDone = async ({ page, q = '' }) => {
    try {
        const res = await request.get('getOrderDone', {
            params: { page, q },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getOrderByID = async (maTaiKhoan) => {
    try {
        const res = await request.get(`getOrderByIdUser/${maTaiKhoan}`);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const payOrder = async (maTaiKhoan, maThue, maXe) => {
    try {
        const res = await request.post('payOrder', {
            maThue,
            maNVNhanXe: maTaiKhoan,
            xe: maXe,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};
