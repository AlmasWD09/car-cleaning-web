import { baseApi } from "../../api/baseApi";

const dashboardServiceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
            query: ({updateInfo,id}) => ({
                url: `/admin/services/${id}`,
                method: "POST",
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
        getService: builder.query({
            query: () => ({
                url: `/admin/services`,
                method: "GET",
            }),
            invalidatesTags: ['service'],
        }),

    })
})


export const {useGetDetailsServiceApiQuery, useAddServiceMutation, useUpdateServiceMutation,useDeleteServiceMutation,useGetServiceQuery } = dashboardServiceApi;