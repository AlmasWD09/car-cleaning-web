// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// export const baseApi = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: import.meta.env.VITE_API_BASE_URL,
//         prepareHeaders: (headers, { getState }) => {
//             const adminToken = localStorage.getItem("admin_token");
//             if (adminToken) {
//                 headers.set("Authorization", `Bearer ${adminToken}`);
//                 headers.set("accept", "application/json")
//             }
//             return headers;

//         }
//     }),
//     // refresh for this tag
//     tagTypes: ["auth", "manage_user", "chart", "booking", "service", "manage_image", "manage_date", "transition", "feedback", "setting", "notification","gallary",""],
//     endpoints: () => ({}),
// });




import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const userToken = localStorage.getItem("user_token");
      const adminToken = localStorage.getItem("admin_token");

      
      if (userToken) {
        console.log("✅ User token use hocche:", userToken);
      } else if (adminToken) {
        console.log("✅ Admin token use hocche:", adminToken);
      } else {
        console.log("❌ Kono token paoya jay nai");
      }

      // ✅ user_token ke priority dite
      const token = userToken || adminToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("accept", "application/json");
      }

      return headers;
    },
  }),
  tagTypes: [
    "auth",
    "manage_user",
    "chart",
    "booking",
    "service",
    "manage_image",
    "manage_date",
    "transition",
    "feedback",
    "setting",
    "notification",
    "gallary",
    "",
  ],
  endpoints: () => ({}),
});
