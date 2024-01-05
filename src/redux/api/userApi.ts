import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
  

    getMyProfile: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery } = userApi;
