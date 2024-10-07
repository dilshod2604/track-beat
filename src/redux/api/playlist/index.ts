import { api as index } from "..";
import { PLAYLIST } from "./types";

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
    addCustomCover: build.mutation<
      PLAYLIST.addCustomCoverResponse,
      PLAYLIST.addCustomCoverRequest
    >({
      query: ({
        playlist_id,
        image,
      }: {
        playlist_id: string;
        image: string;
      }) => ({
        url: `/playlists/${playlist_id}/images`,
        method: "PUT",
        body: image,
      }),
      invalidatesTags: ["playlist"],
    }),
    changeDetails: build.mutation<
      PLAYLIST.ChnageDetailsResponse,
      PLAYLIST.ChnageDetailsRequest
    >({
      query: ({
        name,
        description,
        playlist_id,
      }: {
        name: string;
        description?: string;
        playlist_id: string;
      }) => ({
        url: `/playlists/${playlist_id}`,
        method: "PUT",
        body: {
          name: name,
          description: description,
        },
      }),
      invalidatesTags: ["playlist"],
    }),
  }),
});
export const {
  useGetUserPLaylistsQuery,
  useGetPlaylistByIdQuery,
  useAddCustomCoverMutation,
  useChangeDetailsMutation,
} = api;
