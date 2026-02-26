import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ["Question", "Skill", "Specialization"],
  endpoints: () => ({}),
});
