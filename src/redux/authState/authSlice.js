// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { constants } from 'constants/constants';
import { apiSlice } from './apiSlice';

// const { API_BASE_URL } = constants;

export const authApi = apiSlice.injectEndpoints({
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
