import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    fetchEvents: builder.query({
      query: () => "/events",
    }),
  }),
});

export const { useFetchEventsQuery } = apiSlice;

export default apiSlice;
