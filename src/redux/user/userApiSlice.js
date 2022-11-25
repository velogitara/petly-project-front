// import { setCredentials } from '../authState/authStateSlice';

import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // refresh: builder.mutation({
    //   query: () => ({
    //     url: '/',
    //     method: 'GET',
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       console.log('DATA IN USER API SLICE', data);
    //       const { accessToken } = data;
    //       dispatch(setCredentials({ accessToken }));
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    //   invalidatesTags: ['User', 'Auth'],
    // }),
    getCurrentUser: builder.query({
      query: () => 'users/',
      providesTags: ['User', 'Auth'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ payload }) => ({
        url: `users/updateUserInfo`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    addPet: builder.mutation({
      query: ({ payload }) => ({
        url: `/addPet`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    removePet: builder.mutation({
      query: ({ petId }) => ({
        url: `users/removePet/${petId}`,
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
