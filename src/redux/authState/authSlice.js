import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://localhost:3001';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/auth/`,
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
      query: ({ name, email, password, phone }) => ({
        url: 'register',
        method: 'POST',
        body: {
          name,
          email,
          password,
          phone,
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
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } = authApi;
