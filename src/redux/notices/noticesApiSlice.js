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
      query: ({ category, page = 1, limit = 8, query }) => ({
        url: `notices/categories/${category}?page=${page}&limit=${limit}${
          query ? `&query=${query}` : ''
        }`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
      invalidatesTags: ['Notices'],
    }),
    listNoticesByQuery: builder.query({
      query: ({ category, query = '', favorite, owner, page = 1, limit = 8 }) => ({
        url: `notices/?${
          category ? `category=${category}&` : ''
        }}query=${query}&page=${page}&limit=${limit}${favorite ? '&favorite=true' : ''}${
          owner ? '&owner=true' : ''
        }`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    listUserNotices: builder.query({
      query: ({ page = 1, limit = 8, favorite = false, query }) => ({
        url: `notices/own?page=${page}&limit=${limit}${favorite ? '&favorite=true' : ''}${
          query ? `&query=${query}` : ''
        }`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    getNoticesById: builder.query({
      query: ({ noticeId }) => ({
        url: `notices/${noticeId}`,
        method: 'GET',
      }),
      providesTags: ['Notice'],
      invalidatesTags: ['Notice'],
    }),
    addNotice: builder.mutation({
      query: ({ payload }) => ({
        url: 'notices/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notices', 'Notice'],
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
      invalidatesTags: ['Notices', 'Notice'],
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
