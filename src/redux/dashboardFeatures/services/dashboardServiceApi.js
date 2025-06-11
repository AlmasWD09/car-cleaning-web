import { baseApi } from "../../api/baseApi";




const dashboardServiceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getServiceApi: builder.query({
            query: () => ({
                url: `/admin/services`,
                method: "GET"
            }),
            providesTags: ['service'],
        }),
        addService: builder.mutation({
            query: (serviceInfo) => ({
                url: `/admin/services`,
                method: "POST",
                body:serviceInfo
            }),
            invalidatesTags: ['service'],
        }),
        updateService: builder.mutation({
            query: ({id}) => ({
                url: `/admin/services/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['service'],
        }),

    })
})


export const { useGetServiceApiQuery,useAddServiceMutation,useUpdateServiceMutation} = dashboardServiceApi;