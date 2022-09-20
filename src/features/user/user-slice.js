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
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user.user;
