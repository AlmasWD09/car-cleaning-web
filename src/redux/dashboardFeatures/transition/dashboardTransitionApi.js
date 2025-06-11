import { baseApi } from "../../api/baseApi";

const dashboardTransitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTransitionApi: builder.query({
            query: ({ per_page, page,filter }) => ({
                url: `/admin/transactions?per_page=${per_page}&page=${page}&filter=${filter}`,
                method: "GET"
            }),
            providesTags: ['transition'],
        }),
    })
})


export const {useGetTransitionApiQuery} = dashboardTransitionApi;