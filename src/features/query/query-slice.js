/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const querySlice = createSlice({
  name: '@@query',
  initialState,
  reducers: {
    setQuery: (_, action) => action.payload,
  },
});

export const { setQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;

export const selectQuery = (state) => state.search.query;
