import * as request from '~/utils/request';

export const updateProfile = async ({
    maTaiKhoan,
    email,
    hoTen,
    ngaySinh,
    cccd,
    sdt,
    diaChi,
    gioiTinh,
    trangThai,
}) => {
    try {
        const res = await request.post(
            'updateInfoUser',
            {
                maTaiKhoan,
                email,
                hoTen,
                ngaySinh,
                cccd,
                sdt,
                diaChi,
                gioiTinh,
                trangThai,
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

export const updateAvatar = async (formData) => {
    try {
        const res = await request.post(
            'updateInfoUser',

            formData,

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
