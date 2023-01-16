import { apiSlice } from './apiNoticeQuery';

export const noticesApi = apiSlice.injectEndpoints({
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
    listUserNotices: builder.query({
      query: ({ page = 1, limit = 8, favorite = false, query }) => ({
        url: `notices/own?page=${page}&limit=${limit}${favorite ? '&favorite=true' : ''}${
          query ? `&query=${query}` : ''
        }`,
        method: 'GET',
      }),
      providesTags: ['UserNotices'],
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
      invalidatesTags: ['Notices', 'Notice', 'UserNotices'],
    }),
    updateFavorites: builder.mutation({
      query: ({ noticeId, favorite }) => ({
        url: `notices/favorites/${noticeId}`,
        method: 'PATCH',
        body: {
          favorite,
        },
      }),
      invalidatesTags: ['Notices', 'UserNotices'],
    }),
    removeNotice: builder.mutation({
      query: ({ noticeId }) => ({
        url: `notices/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices', 'Notice', 'UserNotices'],
    }),
  }),
});

export const {
  useListNoticesByCategoryQuery,
  useListUserNoticesQuery,
  useGetNoticesByIdQuery,
  useAddNoticeMutation,
  useUpdateFavoritesMutation,
  useRemoveNoticeMutation,
} = noticesApi;
