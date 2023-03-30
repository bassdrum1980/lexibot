/* eslint-disable no-param-reassign */
// https://github.com/christofferbergj/react-redux-toolkit-example/blob/master/src/features/users/usersSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { calculateOffset } from './calculate-offset';
import { postCard } from '../freedictionary/freedictionary-slice';

export const fetchUser = createAsyncThunk(
  '@@user/fetch-user',
  async (tgid, { extra }) => {
    const result = await extra.jsonServerApi.fetchUserAttributes({
      tgid,
      timezone: calculateOffset(),
    });
    return result;
  }
);

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      const [user] = action.payload;
      state.user = user;
    },
    [postCard.fulfilled]: (state) => {
      if (state.user?.totalCards) state.user.totalCards += 1;
    },
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state) => state.user.user;
export const selectTotalCards = (state) => state.user.user?.totalCards || 0;
