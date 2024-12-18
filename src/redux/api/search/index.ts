import { api as index } from "..";
import { SEARCH } from "./type";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchTracks: build.query<
      SEARCH.SearchTracksResponse,
      SEARCH.SearchTracksRequest
    >({
      
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 20,
        },
      }),
    }),
  }),
});

export const { useSearchTracksQuery } = api;
