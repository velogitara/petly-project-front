import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';

const initialState = { authToken: null, authId: null };

const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setAuthId(state, action) {
      state.authId = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    unsetAuthState(state) {
      state.authToken = initialState.authToken;
      state.authId = initialState.authId;
    },
  },

  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
      state.authToken = payload.data.token;
      state.authId = payload.data.id;
    });
    builder.addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, { payload }) => {
      state.authToken = payload.data.token;
      state.authId = payload.data.id;
    });
    builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, state => {
      state.authToken = initialState.authToken;
      state.authId = initialState.authId;
    });
  },
});

const authPersistConfig = {
  key: 'authState',
  storage,
  whitelist: ['authToken', 'authId'],
};

export const persistedAuthReducer = persistReducer(authPersistConfig, authStateSlice.reducer);

export const selectAuthToken = state => (state.authState.authToken ? true : false);
export const selectAuthId = state => state.authState.authId;

export const { setAuthToken, setAuthId, unsetAuthState } = authStateSlice.actions;
