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

export const updateAvatar = async ({ maTaiKhoan, avatar }) => {
    try {
        const res = await request.post(
            'updateInfoUser',
            {
                maTaiKhoan,
                avatar,
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
