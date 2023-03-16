import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { jsonserverAPI as api } from 'api';
import { queryReducer } from 'features/query/query-slice';
import { freedictionaryReducer } from 'features/freedictionary/freedictionary-slice';
import { userReducer } from 'features/user/user-slice';
import { loadingReducer } from 'features/loading/loading-slice';

const search = combineReducers({
  query: queryReducer,
  freedictionary: freedictionaryReducer,
});

export const store = configureStore({
  reducer: {
    search,
    user: userReducer,
    loading: loadingReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(logger),
});
