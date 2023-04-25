import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as jsonServerApi from 'api/json-server-api';
import * as freeDictionaryApi from 'api/free-dictionary-api';
import * as authApi from 'api/auth';
import * as profileApi from 'api/profile';
import { queryReducer } from 'features/query/query-slice';
import { freedictionaryReducer } from 'features/freedictionary/freedictionary-slice';
import { userReducer } from 'features/user/user-slice';
import { loadingReducer } from 'features/loading/loading-slice';
import { listenerMiddleware } from './listener-middleware';

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
        extraArgument: {
          jsonServerApi,
          freeDictionaryApi,
          authApi,
          profileApi,
        },
      },
    }).concat(logger, listenerMiddleware.middleware),
});
