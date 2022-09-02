/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
  callback: null,
};

const warningSlice = createSlice({
  name: '@@warning',
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/rejected'),
      (state, action) => {
        state.message = action.error.message;
      },
    );
  },
});

export const warningReducer = warningSlice.reducer;
export const selectWarning = (state) => state.warning.message;
