import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { jsonserverAPI as api } from 'config';
import {
  queryReducer,
  freedictionaryReducer,
  loadingReducer,
  userReducer,
} from 'features';

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
