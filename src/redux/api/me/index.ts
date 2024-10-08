import { api as index } from "..";
import { ME } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<ME.GetMEResponse, ME.GetMERequest>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
  }),
});
export const { useGetMeQuery } = api;
