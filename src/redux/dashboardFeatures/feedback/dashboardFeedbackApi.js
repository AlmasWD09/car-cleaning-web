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
        getHighestFeedbackApi: builder.query({
            query: ({ id }) => ({
                url: `/admin/feedback-highlight/${id}`,
                method: "GET"
            }),
            providesTags: ['feedback'],
        }),
        deleteFeedback: builder.mutation({
            query: ({ id }) => ({
                url: `/admin/feedbacks/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['feedback'],
        }),

    })
})


export const { useGetFeedbackApiQuery, useGetHighestFeedbackApiQuery, useDeleteFeedbackMutation } = dashboardFeedbackApi;