import { baseApi } from "../../api/baseApi";

const dashboardSettingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postSettingApi: builder.mutation({
            query: (settingInfo) => ({
                url: `/admin/pages`,
                method: "POST",
                body:settingInfo,
            }),
            invalidatesTags: ['setting'],
        }),
        getSettingApi: builder.query({
            query: ({type,}) => ({
                url: `/admin/pages?type=${type}`,
                method: "GET",
            }),
            providesTags: ['setting'],
        }),

    })
})


export const {usePostSettingApiMutation,useGetSettingApiQuery} = dashboardSettingApi;