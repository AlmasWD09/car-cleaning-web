import { baseApi } from "../../api/baseApi";



const dashboardBookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookingApi: builder.query({
            query: ({ per_page, search = "", filter, }) => ({
                url: `/admin/bookings?per_page=${per_page}&search=${search}&filter=${filter}`,
                method: "GET"
            }),
            providesTags: ['booking'],
        }),
        deleteBookingApi: builder.mutation({
            query: ({ id }) => ({
                url: `/admin/bookings/${id}`,
                method: "GET"
            }),
            invalidatesTags: ['booking'],
        }),
        getMarkComplateBookingApi: builder.query({
            query: ({ id }) => ({
                url: `/admin/booking-status/${id}`,
                method: "GET"
            }),
            providesTags: ['booking'],
        }),
    })
})


export const { useGetBookingApiQuery, useDeleteBookingApiMutation,useGetMarkComplateBookingApiQuery } = dashboardBookingApi;