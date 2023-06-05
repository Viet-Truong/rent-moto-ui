import * as request from '~/utils/request';

export const getAllUser = async (role = '', q = '') => {
    try {
        const res = await request.get('getAllUser', {
            params: {
                role,
                q,
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const updateAccount = async ({
    maTaiKhoan,
    taiKhoan,
    matKhau,
    phanQuyen,
}) => {
    try {
        const res = await request.post(
            'updateInfoUser',
            {
                maTaiKhoan,
                taiKhoan,
                // matKhau,
                // phanQuyen,
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
