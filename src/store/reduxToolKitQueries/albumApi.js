import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

//  albumsApi.useFetchAlbumsQuery
console.log(albumsApi.useFetchAlbumsQuery);
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
