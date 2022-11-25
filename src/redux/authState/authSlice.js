import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';

const { API_BASE_URL } = constants;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/auth`,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authState.authToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: ({ name, email, password, phone, location }) => ({
        url: 'register',
        method: 'POST',
        body: {
          name,
          email,
          password,
          phone,
          location,
        },
      }),
      providesTags: ['Auth'],
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    signOut: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: 'current',
        method: 'GET',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useGetCurrentUserQuery } =
  authApi;
