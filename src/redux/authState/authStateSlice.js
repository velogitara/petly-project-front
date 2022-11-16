import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';

const initialState = { authToken: null };

const authStateSlice = createSlice({
  name: 'authState',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
      state.authToken = payload.data.token;
    });
    builder.addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, { payload }) => {
      state.authToken = payload.data.token;
    });
    builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, state => {
      state.authToken = initialState.authToken;
    });
  },
});

const authPersistConfig = {
  key: 'authState',
  storage,
  whitelist: ['authToken'],
};

export const persistedAuthReducer = persistReducer(authPersistConfig, authStateSlice.reducer);

export const selectAuthToken = state => state.authState.authToken;

export const { setAuthToken, unsetAuthToken } = authStateSlice.actions;
