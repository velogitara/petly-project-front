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
  tagTypes: ['User'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/',
      providesTags: ['User'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ payload }) => ({
        url: `/updateUserInfo`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    addPet: builder.mutation({
      query: ({ payload }) => ({
        url: `/addPet`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    removePet: builder.mutation({
      query: ({ petId }) => ({
        url: `/removePet/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateUserInfoMutation,
  useAddPetMutation,
  useRemovePetMutation,
} = userApi;
