import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerApi: builder.mutation({
            query: (registerInof) => ({
                url: `/auth/register`,
                method: "POST",
                body: registerInof
            }),
            invalidatesTags: ['auth'],
        }),
        otpSendApi: builder.mutation({
            query: (otpInof) => ({
                url: `/auth/check-otp`,
                method: "POST",
                body: otpInof
            }),
            invalidatesTags: ['auth'],
        }),
        postAuthApi: builder.mutation({
            query: (authInfo) => ({
                url: `/auth/login`,
                method: "POST",
                body: authInfo
            }),
            invalidatesTags: ['auth'],
        }),
        logOutAuthApi: builder.mutation({
            query: () => ({
                url: `/auth/logout`,
                method: "POST",
            }),
            invalidatesTags: ['auth'],
        }),
        getProfileApi: builder.query({
            query: () => ({
                url: `/auth/profile`,
                method: "GET",
            }),
            invalidatesTags: ['auth'],
        }),

    })
})


export const { usePostAuthApiMutation,useOtpSendApiMutation,useRegisterApiMutation,useGetProfileApiQuery,useLogOutAuthApiMutation} = authApi;