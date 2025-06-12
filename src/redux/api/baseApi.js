import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const adminToken = localStorage.getItem("admin_token");
            if (adminToken) {
                headers.set("Authorization", `Bearer ${adminToken}`);
                headers.set("accept", "application/json")
            }
            return headers;

        }
    }),
    // refresh for this tag
    tagTypes: ["auth", "manage_user", "chart", "booking", "service", "manage_image", "manage_date", "transition", "feedback", "setting", "",],
    endpoints: () => ({}),
});