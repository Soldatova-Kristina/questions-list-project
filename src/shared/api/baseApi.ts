import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
});
