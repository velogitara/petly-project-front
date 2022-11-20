import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';

const { API_BASE_URL } = constants;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/users`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authState.authToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User', 'Pets', 'Notices', 'Notice'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/',
      providesTags: ['User'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ file = null, data = '' }) => ({
        url: `/updateUserInfo`,
        method: 'PATCH',
        file: file,
        body: {
          data,
        },
      }),
      invalidatesTags: ['User'],
    }),
    addPet: builder.mutation({
      query: ({ file = null, data }) => ({
        url: `/addPet`,
        headers: { 'Content-Type': 'multipart/form-data' },
        method: 'POST',
        file,
        body: {
          data,
        },
      }),
      invalidatesTags: ['Pets'],
    }),
    removePet: builder.mutation({
      query: ({ petId }) => ({
        url: `/removePet/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pets'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateUserInfoMutation,
  useAddPetMutation,
  useRemovePetMutation,
} = userApi;
