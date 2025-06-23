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
        getDetailsServiceApi: builder.query({
            query: (detailsId) => ({
                url: `/admin/services/${detailsId}`,
                method: "GET"
            }),
            providesTags: ['service'],
        }),
        addService: builder.mutation({
            query: (serviceInfo) => ({
                url: `/admin/services`,
                method: "POST",
                body: serviceInfo
            }),
            invalidatesTags: ['service'],
        }),
        updateService: builder.mutation({
            query: ({id,updateInfo}) => ({
                url: `/admin/services/${id}`,
                method: "PUT",
                body:updateInfo
            }),
            invalidatesTags: ['service'],
        }),
        deleteService: builder.mutation({
            query: (id) => ({
                url: `/admin/services/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['service'],
        }),

    })
})


export const { useGetServiceApiQuery,useGetDetailsServiceApiQuery, useAddServiceMutation, useUpdateServiceMutation,useDeleteServiceMutation } = dashboardServiceApi;