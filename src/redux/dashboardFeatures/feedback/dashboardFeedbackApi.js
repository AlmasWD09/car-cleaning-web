import { baseApi } from "../../api/baseApi";

const dashboardFeedbackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFeedbackApi: builder.query({
            query: ({ per_page, page }) => ({
                url: `/admin/feedbacks?per_page=${per_page}&page=${page}`,
                method: "GET"
            }),
            providesTags: ['feedback'],
        }),
        deleteFeedback: builder.mutation({
            query: (deleteId) => ({
                url: `/admin/feedbacks/${deleteId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['feedback'],
        }),

    })
})


export const { useGetFeedbackApiQuery, useDeleteFeedbackMutation } = dashboardFeedbackApi;