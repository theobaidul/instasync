import apiSlice from '../api/apiSlice.js';

const feedOptionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOptions: builder.query({
            query: (args) => ({
                url: '/api/option',
                fetcherFn: args?.appQuery,
            }),
        }),
        updateOptions: builder.mutation({
            query: (args) => ({
                url: '/api/option/update',
                method: 'PATCH',
                body: args?.body,
                fetcherFn: args?.appQuery,
            }),
            onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
                try {
                    const response = (await queryFulfilled).data;
                    // updating the getOptions api cache pessimistically
                    dispatch(
                        apiSlice.util.updateQueryData(
                            'getOptions',
                            { appQuery: args?.appQuery },
                            () => {
                                return response;
                            }
                        )
                    );
                } catch (error) {
                    // nothing to do
                }
            },
        }),
    }),
});

export const { useGetOptionsQuery, useUpdateOptionsMutation } = feedOptionApi;
