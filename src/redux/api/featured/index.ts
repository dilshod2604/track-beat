import { api as index } from "..";
import { FEATURED } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedPlaylist: build.query<
      FEATURED.GetFeaturedResponse,
      FEATURED.GetFeaturedRequest
    >({
      query: () => ({
        url: "/browse/featured-playlists",
        method: "GET",
      }),
      providesTags: ["featured"],
    }),
  }),
});
export const { useGetFeaturedPlaylistQuery } = api;
