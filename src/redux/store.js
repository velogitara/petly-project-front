import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authState/authSlice';
import { noticesApi } from './notices';
import { newsApi } from './news';
import { friendsApi } from './friends';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistedAuthReducer } from './authState';
import { userApi } from './user';

export const store = configureStore({
  reducer: {
    authState: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    noticesApi.middleware,
    newsApi.middleware,
    friendsApi.middleware,
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
