import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';

const { API_BASE_URL } = constants;

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/friends`,
  }),
  tagTypes: ['Friends'],
  endpoints: builder => ({
    listFriends: builder.query({
      query: () => ({
        method: 'GET',
      }),
      providesTags: ['Friends'],
      invalidatesTags: ['Friends'],
    }),
  }),
});

export const { useListFriendsQuery } = friendsApi;
