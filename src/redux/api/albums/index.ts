import { api as index } from "..";
import { ALBUMS } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<ALBUMS.GetAlbumsResponse, ALBUMS.GetAlbumsRequest>({
      query: (id) => ({
        url: `/albums/${id}`,
        method: "GET",
      }),
      providesTags: ["albums"],
    }),
  }),
});
export const { useGetAlbumsQuery } = api;
