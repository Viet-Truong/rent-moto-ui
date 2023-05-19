import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:5000",
});

export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const post = async (path, data, options = {}) => {
    const response = await request.post(path, data, options);
    return response.data;
};
