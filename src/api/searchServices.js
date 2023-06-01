import * as request from '~/utils/request';

export const search = async (q) => {
    try {
        const res = await request.get('getAllXe', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
