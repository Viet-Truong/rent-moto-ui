import * as request from "~/utils/request";

export const getAllUser = async (role = "", q = "") => {
    try {
        const res = await request.get("getAllUser", {
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
