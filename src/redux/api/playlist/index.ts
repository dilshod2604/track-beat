import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUserPLaylists: build.query<
      PLAYLIST.GetUserPlaylistsResponse,
      PLAYLIST.GetUserPlaylistsRequest
    >({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),

    getPlaylistById: build.query<
      PLAYLIST.GetUserPlaylistByIdResponse,
      PLAYLIST.GetUserPlaylistByIdRequest
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}`,
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),
  }),
});
export const { useGetUserPLaylistsQuery, useGetPlaylistByIdQuery } = api;
