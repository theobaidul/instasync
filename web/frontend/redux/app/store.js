import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice.js';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({ serializableCheck: false }).concat(apiSlice.middleware),
});
export default store;
