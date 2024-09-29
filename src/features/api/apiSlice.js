import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    fetchEvents: builder.query({
      query: () => "/events",
    }),
    fetchBookings: builder.query({
      query: () => "/bookings",
    }),
    makeBooking: builder.mutation({
      query: (booking) => ({
        url: "/bookings",
        method: "POST",
        body: booking,
      }),
    }),
    searchEvents: builder.query({
      query: (query) => `/events?q=${query}`,
    }),
  }),
});

export const {
  useFetchEventsQuery,
  useFetchBookingsQuery,
  useMakeBookingMutation,
  useSearchEventsQuery,
} = apiSlice;

export default apiSlice;
