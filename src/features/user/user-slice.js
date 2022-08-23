/* eslint-disable no-param-reassign */
// https://github.com/christofferbergj/react-redux-toolkit-example/blob/master/src/features/users/usersSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { httpsCallable } from 'firebase/functions';
import { functions } from 'config/firebase';

export const fetchUser = createAsyncThunk('@@user/fetch-user', async (tgid) => {
  // I use this occasion in order to correct
  // user's timezone in the db.
  // TODO: this feature needs refactoring
  const calculateOffset = () => {
    const offset = new Date().getTimezoneOffset();
    if (offset) {
      return (offset / 60) * -1;
    }
    return 0;
  };

  const fetchUserAttributes = httpsCallable(functions, 'fetchUserAttributes');
  const result = await fetchUserAttributes({
    tgid,
    timezone: calculateOffset(),
  });

  return result;
});

const initialState = {
  user: null,
  loading: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = 'pending';
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = 'idle';
      state.user = action.payload.data;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = 'idle';
      state.error = 'Error while loading user profile';
    },
  },
});

export const userReducer = userSlice.reducer;

export const selectUser = (state) => state.user;
export const selectLoading = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
});
