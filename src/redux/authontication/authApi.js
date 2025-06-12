import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postAuthApi: builder.mutation({
            query: (authInfo) => ({
                url: `/auth/login`,
                method: "POST",
                body:authInfo
            }),
            invalidatesTags: ['auth'],
        }),
    })
})


export const {usePostAuthApiMutation} = authApi;