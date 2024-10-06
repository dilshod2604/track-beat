import { api as index } from "..";
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
