import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authServices from '~/api/authServices';

export const authRegister = createAsyncThunk(
    'authRegister',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const auth = await authServices.register({
                username,
                password,
            });
            auth && localStorage.setItem('auth', JSON.stringify(auth));
            return auth;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const authLogin = createAsyncThunk(
    'authLogin',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const auth = await authServices.login({ username, password });
            auth && localStorage.setItem('auth', JSON.stringify(auth));
            return auth.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const authLogout = createAsyncThunk('authLogout', async () => {
    localStorage.removeItem('auth');
});
