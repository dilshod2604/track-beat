import { api as index } from "..";
import { PLAYER } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlayBackState: build.query<
      PLAYER.GetPlayBackStateResponse,
      PLAYER.GetPlayBackStateRequest
    >({
      query: () => ({
        url: "/me/player",
        method: "GET",
      }),
      providesTags: ["player"],
    }),
    getDevices: build.query<PLAYER.GetDeviceResponse, PLAYER.GetDeviceRequest>({
      query: () => ({
        url: "me/player/devices",
        method: "GET",
      }),
      providesTags: ["player"],
    }),
    playPlayer: build.mutation({
      query: (device_id) => ({
        url: `/me/player/play?device_id=${device_id}`,
        method: "PUT",
      }),
    }),
  }),
});
export const { useGetPlayBackStateQuery, useGetDevicesQuery ,usePlayPlayerMutation} = api;
