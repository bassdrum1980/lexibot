import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { queryReducer } from './features/query/query-slice';
import { userReducer } from './features/user/user-slice';

const search = combineReducers({
  query: queryReducer,
});

export const store = configureStore({
  reducer: {
    search,
    user: userReducer,
  },
  devTools: true,
});
