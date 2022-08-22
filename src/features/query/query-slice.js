// https://github.com/christofferbergj/react-redux-toolkit-example/blob/master/src/features/users/usersSlice.ts

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'torrid';

const querySlice = createSlice({
  name: '@@query',
  initialState,
  reducers: {
    setQuery: (_, action) => action.payload,
  },
});

export const { setQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;

export const selectQuery = (state) => state.query;
