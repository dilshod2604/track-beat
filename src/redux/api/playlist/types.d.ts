import { IPlaylist, IPlaylistById } from "@/types/schema";

namespace PLAYLIST {
  type GetUserPlaylistsResponse = IPlaylist;
  type GetUserPlaylistsRequest = void;

  type GetUserPlaylistByIdResponse = IPlaylistById;
  type GetUserPlaylistByIdRequest = string;

  type addCustomCoverResponse = void;
  type addCustomCoverRequest = { playlist_id: string; image: string };

  type ChnageDetailsResponse = void;
  type ChnageDetailsRequest = {
    playlist_id: string;
    name: string;
    description?: string;
  };
}
