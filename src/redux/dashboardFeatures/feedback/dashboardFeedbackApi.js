import { baseApi } from "../../api/baseApi";

const dashboardFeedbackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFeedbackApi: builder.query({
            query: () => ({
                url: `/admin/feedbacks`,
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
        postFeedback: builder.mutation({
            query: (feedbackInfo) => ({
                url: `/feedbacks`,
                method: "POST",
                body:feedbackInfo,
            }),
            invalidatesTags: ['feedback'],
        }),

    })
})


export const { useGetFeedbackApiQuery, useDeleteFeedbackMutation,usePostFeedbackMutation } = dashboardFeedbackApi;