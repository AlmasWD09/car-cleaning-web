import { baseApi } from "../../api/baseApi";

const dashboardManageImagesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPhotoApi: builder.query({
            query: () => ({
                url: `/admin/photo-gallery`,
                method: "GET"
            }),
            providesTags: ['manage_image'],
        }),
        addPhoto: builder.mutation({
            query: (imageInfo) => ({
                url: `/admin/photo-gallery`,
                method: "POST",
                body:imageInfo
            }),
            invalidatesTags: ['manage_image'],
        }),
        updatePhoto: builder.mutation({
            query: ({ id }) => ({
                url: `/admin/photo-gallery/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['manage_image'],
        }),
        deletePhoto: builder.mutation({
            query: ({ id }) => ({
                url: `/admin/photo-gallery/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['manage_image'],
        }),

    })
})


export const {useGetPhotoApiQuery,useAddPhotoMutation,useUpdatePhotoMutation,useDeletePhotoMutation} = dashboardManageImagesApi;