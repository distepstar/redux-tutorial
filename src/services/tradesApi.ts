import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tradesApi = createApi({
  reducerPath: "tradeApi",
  keepUnusedDataFor: 3600,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTrades: builder.query<any[], void>({
      query: () => "trades,,,,",
    }),
  }),
});

const useGetTradesQuery = tradesApi;

export { useGetTradesQuery };
