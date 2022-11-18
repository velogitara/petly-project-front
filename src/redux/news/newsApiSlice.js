import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';

const { API_BASE_URL } = constants;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/news`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authState.authToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    listNews: builder.query({
      query: ({ page = 1, limit = 6, query = '' }) => ({
        url: `/?page=${page}&limit=${limit}&query=${query}`,
        method: 'GET',
      }),
      providesTags: ['News'],
      invalidatesTags: ['News'],
    }),
    addNews: builder.mutation({
      query: payload => ({
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['News'],
    }),
  }),
});

export const { useListNewsQuery} = newsApi;
