import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const melobitApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-beta.melobit.com/v1",
  }),
  endpoints: (builder) => ({
    getTrendingArtists: builder.query({ query: () => "/artist/trending/0/4" }),
    getTopDayMusics: builder.query({
      query: () => "/song/top/day/0/100",
    }),
    getTopWeekMusics: builder.query({
      query: () => "/song/top/week/0/100",
    }),
    getSongsAndArtistsBySearch: builder.query({
      query: (searchTerm) =>
        `https://api-beta.melobit.com/v1/search/query/${searchTerm}/0/50`,
    }),
    getMusicDetails: builder.query({
      query: ({ musicId }) => `/song/${musicId}`,
    }),
    getNewestMusics: builder.query({
      query: () => "/song/new/0/11",
    }),
  }),
});

export const {
  useGetMusicDetailsQuery,
  useGetNewestMusicsQuery,
  useGetSongsAndArtistsBySearchQuery,
  useGetTopDayMusicsQuery,
  useGetTopWeekMusicsQuery,
  useGetTrendingArtistsQuery,
} = melobitApi;
