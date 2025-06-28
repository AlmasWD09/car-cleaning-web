import { baseApi } from "../../api/baseApi";

const serviceAvilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getServiceAvilityApi: builder.query({
            query: () => ({
                url: `/manage-dates`,
                method: "GET",
            }),
            providesTags: ['serviceAvility'],
        }),
    })
})


export const {useGetServiceAvilityApiQuery} = serviceAvilityApi;