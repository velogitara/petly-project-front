import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://localhost:3001';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/auth/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userState.userToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
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
      providesTags: ['User'],
    }),
    signInUser: builder.mutation({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    signOutUser: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignUpUserMutation, useSignInUserMutation, useSignOutUserMutation } = authApi;
