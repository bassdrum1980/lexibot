import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { functionsAPI as api } from 'config';
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(logger),
});
