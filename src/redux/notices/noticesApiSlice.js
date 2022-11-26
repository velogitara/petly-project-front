import { apiSlice } from './apiNoticeQuery';

export const noticesApi = apiSlice.injectEndpoints({
  // createApi({
  // reducerPath: 'noticesApi',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: `${API_BASE_URL}/`,
  //   credentials: 'include',

  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().authState.authToken;
  //     if (token) {
  //       headers.set('Authorization', `Bearer ${token}`);
  //     }

  //     return headers;
  //   },
  // }),
  // tagTypes: ['Notices', 'Notice'],
  endpoints: builder => ({
    listNoticesByCategory: builder.query({
      query: ({ category, page = 1, limit = 8 }) => ({
        url: `notices/categories/${category}?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
      invalidatesTags: ['Notices'],
    }),
    listNoticesByQuery: builder.query({
      query: ({ category, searchQuery = '', page = 1, limit = 8 }) => ({
        url: `notices/?category=${category}&query=${searchQuery}&page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    listUserNotices: builder.query({
      query: ({ page = 1, limit = 8, favorite = false }) => ({
        url: `notices/own?page=${page}&limit=${limit}${favorite ? '&favorite=true' : ''}`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    getNoticesById: builder.query({
      query: ({ noticeId }) => ({
        url: `notices/${noticeId}`,
        method: 'GET',
      }),
      // providesTags: ['Notice'],
      invalidatesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: ({ payload }) => ({
        url: 'notices/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notices'],
    }),
    updateFavorites: builder.mutation({
      query: ({ noticeId, favorite }) => ({
        url: `notices/favorites/${noticeId}`,
        method: 'PATCH',
        body: {
          favorite,
        },
      }),
      invalidatesTags: ['Notices'],
    }),
    removeNotice: builder.mutation({
      query: ({ noticeId }) => ({
        url: `notices/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const {
  useListNoticesByCategoryQuery,
  useListNoticesByQueryQuery,
  useListUserNoticesQuery,
  useGetNoticesByIdQuery,
  useAddNoticeMutation,
  useUpdateFavoritesMutation,
  useRemoveNoticeMutation,
} = noticesApi;
