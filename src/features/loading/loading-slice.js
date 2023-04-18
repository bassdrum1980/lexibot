/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  loading: 'idle', // loading, idle
  cardPosted: false,
};

const loadingSlice = createSlice({
  name: '@@loading',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetCardPosted: (state) => {
      state.cardPosted = false;
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
        state.error = action.payload;
        state.loading = 'idle';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state) => {
        state.loading = 'idle';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('post-card/fulfilled'),
      (state) => {
        state.cardPosted = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('setAddOneMore'),
      (state) => {
        state.cardPosted = false;
      }
    );
  },
});

export const loadingReducer = loadingSlice.reducer;
export const { resetError, resetCardPosted } = loadingSlice.actions;
export const selectError = (state) => state.loading.error;
export const selectLoading = (state) => state.loading.loading;
export const selectCardPosted = (state) => state.loading.cardPosted;
