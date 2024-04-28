import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
