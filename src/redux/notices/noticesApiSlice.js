import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';

const { API_BASE_URL } = constants;

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/notices`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authState.authToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Notices', 'Notice'],
  endpoints: builder => ({
    listNoticesByCategory: builder.query({
      query: ({ category, page = 1, limit = 8 }) => ({
        url: `/categories/${category}?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
      invalidatesTags: ['Notices'],
    }),
    listNoticesByQuery: builder.query({
      query: ({ category, searchQuery = '', page = 1, limit = 8 }) => ({
        url: `/?category=${category}&query=${searchQuery}&page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    listUserNotices: builder.query({
      query: ({ page = 1, limit = 8, favorite = false }) => ({
        url: `/own?page=${page}&limit=${limit}${favorite ? '&favorite=true' : ''}`,
        method: 'GET',
      }),
      invalidatesTags: ['Notices'],
    }),
    getNoticesById: builder.query({
      query: ({ noticeId }) => ({
        url: `/${noticeId}`,
        method: 'GET',
      }),
      providesTags: ['Notice'],
      invalidatesTags: ['Notice'],
    }),
    addNotice: builder.mutation({
      query: ({ payload }) => ({
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notices', 'Notice'],
    }),
    updateFavorites: builder.mutation({
      query: ({ noticeId, favorite }) => ({
        url: `/favorites/${noticeId}`,
        method: 'PATCH',
        body: {
          favorite,
        },
      }),
      invalidatesTags: ['Notices'],
    }),
    removeNotice: builder.mutation({
      query: ({ noticeId }) => ({
        url: `/${noticeId}`,
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
