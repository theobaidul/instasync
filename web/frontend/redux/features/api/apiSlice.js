import { createApi } from '@reduxjs/toolkit/query/react';

// custome base query function
const baseQuery = async (args, _api, _extraOptions) => {
    try {
        const { url, method, body, fetcherFn } = args;
        const response = await fetcherFn(url, {
            method: method || 'GET',
            ...(body && {
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            }), // add body and header property if body esist
        });
        const data = await response.json();

        return { data, meta: { request: response?.request, response } };
    } catch (error) {
        return { error, meta: { request: response?.request, response } };
    }
};

const apiSlice = createApi({
    reducerPath: 'instaSyncApi',
    baseQuery,
    tagTypes: [],
    endpoints: () => ({}),
});

export default apiSlice;
