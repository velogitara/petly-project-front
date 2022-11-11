import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './userState/authSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistedUserReducer } from './userState';
import { filterSlice } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    userState: persistedUserReducer,
    [authApi.reducerPath]: authApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
