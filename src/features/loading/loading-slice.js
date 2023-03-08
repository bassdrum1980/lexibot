/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  loading: 'idle', // loading, idle
};

const loadingSlice = createSlice({
  name: '@@loading',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        state.loading = 'loading';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('/rejected'),
      (state, action) => {
        state.error = action.error.message;
        state.loading = 'idle';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state) => {
        state.loading = 'idle';
      }
    );
  },
});

export const loadingReducer = loadingSlice.reducer;
export const { resetError } = loadingSlice.actions;
export const selectError = (state) => state.loading.error;
export const selectLoading = (state) => state.loading.loading;
