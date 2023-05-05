import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com/",
});

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
