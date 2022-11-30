import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { themeValue: false },
  reducers: {
    toggleTheme(state) {
      state.themeValue = !state.themeValue;
    },
  },
});

const themePersistConfig = {
  key: 'userTheme',
  storage,
  whitelist: ['themeValue'],
};

export const persistedThemeReducer = persistReducer(themePersistConfig, themeSlice.reducer);

export const selectThemeValue = state => state.theme.themeValue;

export const { toggleTheme } = themeSlice.actions;
