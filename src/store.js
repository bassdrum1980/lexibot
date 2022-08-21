import { configureStore } from '@reduxjs/toolkit';
import { queryReducer } from './features/query/query-slice';

export const store = configureStore({
  reducer: {
    query: queryReducer,
  },
  devTools: true,
});
