import * as request from '~/utils/request';

export const getAllUser = async ({ role = '', q = '', page = '' }) => {
    try {
        const res = await request.get('getAllUser', {
            params: {
                role,
                page,
                q,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const getAllCustomer = async ({ q = '', page = '' }) => {
    try {
        const res = await request.get('getAllCustomer', {
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

export const getAllEmployees = async ({ q = '', page = '' }) => {
    try {
        const res = await request.get('getAllEmployees', {
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

export const thongKeUser = async () => {
    try {
        const res = await request.get('thongkeUser');
        return JSON.parse(res);
    } catch (e) {
        console.log(e);
    }
};

export const updateAccount = async ({ maTaiKhoan, taiKhoan }) => {
    try {
        const res = await request.post(
            'updateInfoUser',
            {
                maTaiKhoan,
                taiKhoan,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return res;
    } catch (e) {
        console.log(e);
    }
};

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

export const thongKe = async () => {
    try {
        const res = await request.get('thongke');
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

export const getOrderByID = async (maTaiKhoan) => {
    try {
        const res = await request.get(`getOrderByIdUser/${maTaiKhoan}`);
        return res;
    } catch (e) {
        console.log(e);
    }
};
