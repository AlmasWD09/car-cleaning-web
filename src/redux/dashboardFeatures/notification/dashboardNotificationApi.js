import { baseApi } from "../../api/baseApi";




const dashboardNotificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotificationApi: builder.query({
            query: () => ({
                url: `/notifications`,
                method: "GET"
            }),
            providesTags: ['notification'],
        }),
    })
})


export const {useGetNotificationApiQuery} = dashboardNotificationApi;