import apiSlice from '../api/apiSlice.js';

const instaMediaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllMedia: builder.query({
            query: (args) => ({
                url: '/api/media',
                fetcherFn: args?.appQuery,
            }),
        }),
    }),
});

export const { useGetAllMediaQuery } = instaMediaApi;
