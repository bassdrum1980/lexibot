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
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = 'idle';
      state.user = action.payload.data;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = 'idle';
    },
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user;
export const selectLoading = (state) => state.user.loading;
