import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getArtists: build.query({
      query: () => ({
        url: "/artists",
        method: "GET",
      }),
      providesTags:["artists"]
    }),
  }),
});
export const { useGetArtistsQuery } = api;
