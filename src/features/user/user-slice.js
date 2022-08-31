/* eslint-disable no-param-reassign */
// https://github.com/christofferbergj/react-redux-toolkit-example/blob/master/src/features/users/usersSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculateOffset } from './calculate-offset';

export const fetchUser = createAsyncThunk('@@user/fetch-user', async (tgid, { extra }) => {
  const result = await extra.fetchUserAttributes({
    tgid,
    timezone: calculateOffset(),
  });
  return result;
});

const initialState = {
  user: null,
  loading: 'idle', // loading
  error: null,
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = 'loading';
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = 'idle';
      state.user = action.payload.data;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = 'idle';
      state.error = action.error.message;
    },
  },
});

export const userReducer = userSlice.reducer;

export const selectUser = (state) => state.user;
// TODO: разбить на 2 селектора
export const selectLoading = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
});
