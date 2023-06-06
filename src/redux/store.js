import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [thunkMiddleware],
});

export default store;
