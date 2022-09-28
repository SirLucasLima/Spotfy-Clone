import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88dd534abcmshe9ec81cfedb44c8p112560jsna28d111405b7',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
export const shazamCoreAPi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '88dd534abcmshe9ec81cfedb44c8p112560jsna28d111405b7');

        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreAPi;