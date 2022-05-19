import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rawBaseQuery } from "./shared";

export const tradesApi = createApi({
  reducerPath: "tradeApi",
  keepUnusedDataFor: 3600,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getTrades: builder.query<any[], void>({
      query: () => "trades",
    }),
  }),
});

export const { useGetTradesQuery } = tradesApi;
