import { api as index } from "..";
import { CATEGORIES } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<
      CATEGORIES.GetCategoriesResponse,
      CATEGORIES.GetCategoriesRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});
export const { useGetCategoryQuery } = api;
